import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';

// Firebase config from environment variables (VITE_ prefix exposes them to the client)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Only initialize if config is present
const isConfigured = firebaseConfig.apiKey && firebaseConfig.projectId;
const app = isConfigured ? initializeApp(firebaseConfig) : null;
const db = app ? getFirestore(app) : null;

/**
 * Fetches visitor's country using the free ipwhois.app service.
 * Falls back to 'Unknown' if the request fails.
 */
async function getVisitorCountry(): Promise<{ country: string; countryCode: string }> {
  try {
    const res = await fetch('https://ipwhois.app/json/');
    if (!res.ok) throw new Error('IP lookup failed');
    const data = await res.json();
    return { country: data.country || 'Unknown', countryCode: data.country_code || '??' };
  } catch {
    return { country: 'Unknown', countryCode: '??' };
  }
}

/**
 * Logs a single visit to Firestore.
 * Call this once on page load (inside a useEffect with empty deps).
 * Silently fails if Firebase is not configured — no errors shown to visitors.
 */
export async function logVisit(): Promise<void> {
  if (!db) {
    console.warn('[Analytics] Firebase not configured — skipping visit log.');
    return;
  }

  try {
    const geo = await getVisitorCountry();

    await addDoc(collection(db, 'visits'), {
      timestamp: serverTimestamp(),
      country: geo.country,
      countryCode: geo.countryCode,
      userAgent: navigator.userAgent,
      referrer: document.referrer || 'direct',
      page: window.location.pathname,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      language: navigator.language,
    });
  } catch (err) {
    // Silently fail — analytics should never break the portfolio
    console.warn('[Analytics] Failed to log visit:', err);
  }
}
