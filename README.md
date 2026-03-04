# Saqib Ali - Portfolio

Personal portfolio website for **Saqib Ali**, Plant Pathologist & Bioinformatician.

## Visit
👉 **[View the Live Portfolio](https://alisphd.github.io/portfolio/)**

## Features
- **Responsive Design**: Built with React, Vite, and tailwind configurations.
- **Detailed Sections**: Includes experience, education, publications, certifications, and a research gallery.
- **Live Visitor Analytics**: Tracks anonymous visitor counts and country data using Firebase.

## Technology Stack
- [React (v19)](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS (v4)](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [Framer Motion](https://motion.dev/)
- [Firebase Firestore](https://firebase.google.com/)

## Local Development
To run this project locally:

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:3000/portfolio/`

## Data Configuration
All portfolio content (experience, publications, skills, etc.) is driven by a central data object located in `src/data.ts`. To update the portfolio content, modify this file.

## Analytics Setup
To configure the visitor analytics feature, create a `.env` file in the root directory and add your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=""
VITE_FIREBASE_AUTH_DOMAIN=""
VITE_FIREBASE_PROJECT_ID=""
VITE_FIREBASE_STORAGE_BUCKET=""
VITE_FIREBASE_MESSAGING_SENDER_ID=""
VITE_FIREBASE_APP_ID=""
```

## License
© 2026 Saqib Ali. All rights reserved.
