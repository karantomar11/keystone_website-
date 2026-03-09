# Keystone Redactor Framework

This project is a landing page for the Keystone Redactor Framework, a zero-knowledge AI privacy middleware.

## Overview

The application is built with Next.js and showcases the features of Keystone, a local-first redaction engine designed to protect sensitive data (PII, PHI, etc.) when using cloud-based AI services.

### Key Features of the Landing Page:
- **Hero Section:** A clear and concise introduction to the product.
- **Problem/Solution:** Explains the risks of sending raw PII to cloud AI and how Keystone solves it.
- **Feature Grid:** Highlights the local-first architecture, including SQLite persistence and forensic logging.
- **Compliance Focus:** Emphasizes GDPR compliance and data security.
- **Contact Form:** A fully functional contact form integrated with Resend for email delivery.

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (with App Router)
- **UI:** [React](https://react.dev/), [ShadCN UI](https://ui.shadcn.com/), [Tailwind CSS](https://tailwindcss.com/)
- **AI/Backend:** [Genkit](https://firebase.google.com/docs/genkit) for AI flows.
- **Email:** [Resend](https://resend.com/) for contact form submissions.

## Getting Started

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add your API keys:
    ```
    RESEND_API_KEY=your_resend_api_key
    GEMINI_API_KEY=your_gemini_api_key
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will be available at `http://localhost:9002`.

## Deployment

This application is configured for easy deployment on platforms like Vercel or Firebase App Hosting. Remember to set your environment variables in your hosting provider's project settings.
