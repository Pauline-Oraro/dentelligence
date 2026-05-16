# 🦷 Dentelligence — AI Voice Dental Assistant

> **AI-powered dental assistance that actually helps.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-dentelligence--khaki.vercel.app-blue?style=flat-square)](https://dentelligence-khaki.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

Dentelligence is a full-stack AI voice dental assistant that lets users ask dental questions via voice, receive expert-grade guidance, and book appointments with verified dentists — all in one platform. It is available 24/7 and trained on thousands of real dental cases.

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Database Setup](#database-setup)
  - [Running Locally](#running-locally)
- [Key Integrations](#key-integrations)
- [Scripts](#scripts)
- [Deployment](#deployment)
- [License](#license)

---

## Features

- **🎙️ AI Voice Calls** — Real-time voice conversations with an AI dental assistant powered by Vapi AI. Ask questions, describe symptoms, and receive spoken guidance.
- **🤖 Instant Answers** — Get immediate expert-level answers to dental questions such as pain management, treatment costs, and care timelines — available 24/7.
- **📅 Smart Appointment Booking** — Find and book verified dentists near you directly through the platform.
- **💊 Symptom Assessment** — Describe your symptoms and receive a structured assessment with guidance on urgency and next steps.
- **📋 Personalized Care Plans** — AI Pro subscribers receive tailored dental care plans based on their history and AI consultations.
- **📊 Health Reports & Call History** — Review past AI voice consultations and detailed dental health reports.
- **🔔 Appointment Reminders** — Automated email reminders via Resend to keep patients on track.
- **🔐 Secure Authentication** — User sign-up and login powered by Clerk, with support for OAuth providers.
- **🌗 Dark/Light Mode** — Theme switching with `next-themes` for comfortable use in any environment.

---

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org) with Turbopack |
| **Language** | TypeScript 5 |
| **Runtime** | React 19 |
| **Styling** | Tailwind CSS v4 |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com), Radix UI, Base UI |
| **Authentication** | [Clerk](https://clerk.com) (`@clerk/nextjs`) |
| **AI Voice** | [Vapi AI](https://vapi.ai) (`@vapi-ai/web`) |
| **Database ORM** | [Prisma](https://www.prisma.io) v6 |
| **Server State** | [TanStack Query](https://tanstack.com/query) v5 |
| **Forms** | React Hook Form + Zod validation |
| **Email** | [Resend](https://resend.com) + React Email |
| **Charts** | [Recharts](https://recharts.org) |
| **Linting/Formatting** | [Biome](https://biomejs.dev) |
| **Deployment** | [Vercel](https://vercel.com) |

---

## Project Structure

```
dentelligence/
├── prisma/
│   ├── schema.prisma        # Database schema
│   └── migrations/          # Prisma migration files
├── public/                  # Static assets (images, icons)
├── src/
│   ├── app/                 # Next.js App Router pages & API routes
│   ├── components/          # Reusable React components
│   ├── lib/                 # Utility functions and helpers
│   └── ...
├── .vscode/                 # Editor settings
├── biome.json               # Biome linter/formatter config
├── components.json          # shadcn/ui component config
├── next.config.ts           # Next.js configuration
├── prisma.config.ts         # Prisma configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** v18 or later
- **npm** v9 or later
- A **PostgreSQL** database (local or hosted, e.g. [Neon](https://neon.tech), [Supabase](https://supabase.com))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Pauline-Oraro/dentelligence.git
cd dentelligence
```

2. **Install dependencies**

```bash
npm install
```

### Environment Variables

Create a `.env` file in the root of the project based on the variables below. Never commit this file to version control.

```env
# ─── Database ───────────────────────────────────────────────────────────────
DATABASE_URL="postgresql://user:password@host:5432/dentelligence"

# ─── Clerk Authentication ────────────────────────────────────────────────────
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

# ─── Vapi AI (Voice Agent) ───────────────────────────────────────────────────
NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
VAPI_PRIVATE_KEY=your_vapi_private_key

# ─── Resend (Email) ──────────────────────────────────────────────────────────
RESEND_API_KEY=re_...
EMAIL_FROM=no-reply@yourdomain.com
```

> **Where to get the keys:**

> - **Clerk** — [dashboard.clerk.com](https://dashboard.clerk.com)
> - **Vapi AI** — [dashboard.vapi.ai](https://dashboard.vapi.ai)
> - **Resend** — [resend.com](https://resend.com)

### Database Setup

1. **Generate the Prisma client**

```bash
npx prisma generate
```

2. **Run database migrations**

```bash
npx prisma migrate dev --name init
```

3. **(Optional) Seed the database**

```bash
npx prisma db seed
```

4. **(Optional) Open Prisma Studio** to inspect your data

```bash
npx prisma studio
```

### Running Locally

Start the development server with Turbopack:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Key Integrations

### 🎙️ Vapi AI — Voice Agent

Dentelligence uses **Vapi AI** (`@vapi-ai/web`) to power real-time AI voice calls directly in the browser. Users click "Try voice agent" and speak naturally to the AI dental assistant. The Vapi SDK handles microphone access, streaming audio, and the AI model responses.

### 🔐 Clerk — Authentication

**Clerk** provides a full-featured authentication layer including email/password sign-up, OAuth (Google, etc.), multi-factor authentication, and user management — all with pre-built React components and middleware.

### 📧 Resend — Transactional Email

**Resend** is used alongside `@react-email/components` to send beautifully templated transactional emails, including appointment confirmations and reminders, directly from the server.

### 🗄️ Prisma — Database ORM

**Prisma** is the ORM for all database interactions. The schema is defined in `prisma/schema.prisma` and migrations are tracked in `prisma/migrations/`.

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with Turbopack |
| `npm run build` | Generate Prisma client and build for production |
| `npm run start` | Start the production server |
| `npm run lint` | Lint the codebase using Biome |
| `npm run format` | Format the codebase using Biome |

---

## Deployment

This project is deployed on **Vercel**. To deploy your own instance:

1. Push the repository to GitHub.
2. Import the project into [Vercel](https://vercel.com/new).
3. Add all environment variables from the [Environment Variables](#environment-variables) section to your Vercel project settings.
4. Vercel will automatically run `npm run build` (which includes `prisma generate`) on each deployment.

> **Note:** Make sure your database is accessible from Vercel's servers. Providers like [Neon](https://neon.tech) or [Supabase](https://supabase.com) work great out of the box.

---

## License

This project is private. All rights reserved © 2026 Dentelligence.

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/Pauline-Oraro">Pauline Oraro</a>
</p>
