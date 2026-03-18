# Saqib Ali Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live%20Portfolio-alisphd.github.io%2Fportfolio-0f766e?style=for-the-badge&logo=googlechrome&logoColor=white)](https://alisphd.github.io/portfolio/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-alisphd%2Fportfolio-181717?style=for-the-badge&logo=github)](https://github.com/alisphd/portfolio)
[![React 19](https://img.shields.io/badge/React-19-149eca?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.x-646cff?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

Personal portfolio website for **Saqib Ali**, a Plant Pathologist and Bioinformatician working across plant disease research, molecular diagnostics, computational genomics, and research software.

## Live Portfolio

- Portfolio: [https://alisphd.github.io/portfolio/](https://alisphd.github.io/portfolio/)
- Repository: [https://github.com/alisphd/portfolio](https://github.com/alisphd/portfolio)

## What This Site Includes

- Research-focused sections for experience, education, publications, skills, courses, honors, references, and a research gallery
- A separate **Digital Projects** area for deployed tools, web apps, and pipelines
- Responsive design with animated navigation and modern card-based layouts
- Anonymous visitor analytics using Firebase

## Featured Digital Projects

- **PhytoAid**  
  Live: [https://phytoaid.streamlit.app/](https://phytoaid.streamlit.app/)  
  GitHub: [https://github.com/alisphd/phytoaid](https://github.com/alisphd/phytoaid)

- **PhytoPlan**  
  Live: [https://alisphd.github.io/phytoplan/](https://alisphd.github.io/phytoplan/)  
  GitHub: [https://github.com/alisphd/phytoplan](https://github.com/alisphd/phytoplan)

- **Research Synthesizer**  
  Live: [https://alisphd.github.io/research-synthesizer/](https://alisphd.github.io/research-synthesizer/)  
  GitHub: [https://github.com/alisphd/research-synthesizer](https://github.com/alisphd/research-synthesizer)

- **Plant Virus Pipeline**  
  Live: [https://plant-virus-pipeline-production.up.railway.app/](https://plant-virus-pipeline-production.up.railway.app/)  
  GitHub: [https://github.com/alisphd/plant-virus-pipeline](https://github.com/alisphd/plant-virus-pipeline)

## Technology Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Lucide React](https://lucide.dev/)
- [Motion](https://motion.dev/)
- [Firebase Firestore](https://firebase.google.com/)

## Local Development

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open:

```text
http://localhost:3000/portfolio/
```

## Content Management

Most portfolio content is driven from [src/data.ts](src/data.ts), including experience, publications, gallery items, and digital project cards.

## Analytics Setup

Create a `.env` file in the project root and provide your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=""
VITE_FIREBASE_AUTH_DOMAIN=""
VITE_FIREBASE_PROJECT_ID=""
VITE_FIREBASE_STORAGE_BUCKET=""
VITE_FIREBASE_MESSAGING_SENDER_ID=""
VITE_FIREBASE_APP_ID=""
```

## License

Copyright 2026 Saqib Ali. All rights reserved.
