import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';

type GeoSnapshot = {
  country: string;
  countryCode: string;
  region: string;
  city: string;
  timezone: string;
  utcOffset: string;
  source: string;
};

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

const isConfigured = firebaseConfig.apiKey && firebaseConfig.projectId;
const app = isConfigured ? initializeApp(firebaseConfig) : null;
const db = app ? getFirestore(app) : null;

function formatUtcOffset(minutes: number): string {
  const sign = minutes >= 0 ? '+' : '-';
  const absoluteMinutes = Math.abs(minutes);
  const hours = String(Math.floor(absoluteMinutes / 60)).padStart(2, '0');
  const mins = String(absoluteMinutes % 60).padStart(2, '0');
  return `UTC${sign}${hours}:${mins}`;
}

async function fetchJson(url: string): Promise<any> {
  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 4000);

  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: {
        Accept: 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    return await response.json();
  } finally {
    window.clearTimeout(timeout);
  }
}

async function fetchGeoFromIpwhoIs(): Promise<GeoSnapshot | null> {
  const data = await fetchJson('https://ipwho.is/');
  if (data?.success === false) {
    return null;
  }

  return {
    country: data?.country || 'Unknown',
    countryCode: data?.country_code || '??',
    region: data?.region || 'Unknown',
    city: data?.city || 'Unknown',
    timezone: data?.timezone?.id || 'Unknown',
    utcOffset: data?.timezone?.utc || 'Unknown',
    source: 'ipwho.is',
  };
}

async function fetchGeoFromIpapi(): Promise<GeoSnapshot | null> {
  const data = await fetchJson('https://ipapi.co/json/');
  if (data?.error) {
    return null;
  }

  return {
    country: data?.country_name || 'Unknown',
    countryCode: data?.country_code || '??',
    region: data?.region || 'Unknown',
    city: data?.city || 'Unknown',
    timezone: data?.timezone || 'Unknown',
    utcOffset: data?.utc_offset ? `UTC${data.utc_offset}` : 'Unknown',
    source: 'ipapi.co',
  };
}

async function getVisitorGeo(): Promise<GeoSnapshot> {
  const browserOffsetMinutes = -new Date().getTimezoneOffset();
  const browserTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown';
  const fallback: GeoSnapshot = {
    country: 'Unknown',
    countryCode: '??',
    region: 'Unknown',
    city: 'Unknown',
    timezone: browserTimezone,
    utcOffset: formatUtcOffset(browserOffsetMinutes),
    source: 'browser-fallback',
  };

  try {
    const primary = await fetchGeoFromIpwhoIs();
    if (primary) {
      return primary;
    }
  } catch {
    // Try the next provider.
  }

  try {
    const secondary = await fetchGeoFromIpapi();
    if (secondary) {
      return secondary;
    }
  } catch {
    // Fall back to browser timezone information only.
  }

  return fallback;
}

export async function logVisit(): Promise<void> {
  if (!db) {
    console.warn('[Analytics] Firebase not configured; skipping visit log.');
    return;
  }

  try {
    const geo = await getVisitorGeo();
    const now = new Date();
    const localOffsetMinutes = -now.getTimezoneOffset();
    const localTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Unknown';

    await addDoc(collection(db, 'visits'), {
      timestamp: serverTimestamp(),
      clientTimeIso: now.toISOString(),
      clientLocalDateTime: now.toLocaleString('en-PK', {
        dateStyle: 'medium',
        timeStyle: 'medium',
        hour12: true,
      }),
      clientTimeZone: localTimezone,
      clientUtcOffset: formatUtcOffset(localOffsetMinutes),
      clientUtcOffsetMinutes: localOffsetMinutes,
      country: geo.country,
      countryCode: geo.countryCode,
      region: geo.region,
      city: geo.city,
      geoTimeZone: geo.timezone,
      geoUtcOffset: geo.utcOffset,
      geoSource: geo.source,
      page: window.location.pathname,
      pageUrl: window.location.href,
      referrer: document.referrer || 'direct',
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
    });
  } catch (err) {
    console.warn('[Analytics] Failed to log visit:', err);
  }
}
