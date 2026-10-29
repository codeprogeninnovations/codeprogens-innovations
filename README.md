# CODEPROGENS INNOVATIONS — Enterprise Software & AI Engineering Platform

Modern, production-ready Next.js web application built for **CODEPROGENS INNOVATIONS** — an enterprise software engineering consultancy and digital transformation partner.

---

## ⚡ Tech Stack & Architecture

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, React Server & Client Components)
- **Library**: [React 19](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom cyber-enterprise design system, glow effects & responsive layouts
- **Icons**: [Lucide React](https://lucide.dev/)
- **Architecture**:
  - Full modular component structure (`src/components/`)
  - Typed central data store (`src/data/content.ts`)
  - Dynamic interactive features:
    - **Interactive Project Estimator**: Real-time scope, timeline, and investment bracket calculator with instant prefill into the project intake form
    - **Sprint Delivery Engine**: 4-Phase engineering methodology showcase with tangible deliverables
    - **Production Case Studies**: In-depth breakdowns across FinTech, HealthTech, Logistics IoT, and Enterprise SaaS
    - **Tech Matrix**: Multi-category filterable tech stack with use case descriptions
    - **Contact Intake & Scheduler**: Form with validation, reference ticket generator, mutual NDA request, and direct calendar meeting scheduler
    - **Testimonial Trust Wall & FAQ Accordion**

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** v18.18+ or v20+ / v22+
- **npm**, **pnpm**, or **yarn**

### 2. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm run start
```

---

## 📁 Project Directory Structure

```
codeprogens-innovations/
├── public/                     # Static assets & favicons
├── src/
│   ├── app/
│   │   ├── globals.css         # Tailwind v4 theme, glow utilities & animations
│   │   ├── layout.tsx          # Root layout with SEO metadata & viewport configuration
│   │   └── page.tsx            # Main application page orchestrating interactive components
│   ├── components/
│   │   ├── Navbar.tsx          # Glassmorphic header with navigation links & mobile drawer
│   │   ├── Hero.tsx            # Dynamic headline, stats row & interactive terminal
│   │   ├── Services.tsx        # 6 core service disciplines & technical deliverables modal
│   │   ├── TechStack.tsx       # Filterable tech stack matrix with search
│   │   ├── CaseStudies.tsx     # In-depth production case studies & telemetry metrics
│   │   ├── EngineeringProcess.tsx # 4-Stage Sprint Delivery Engine
│   │   ├── ProjectEstimator.tsx # Real-time interactive scope & budget calculator
│   │   ├── WhyChooseUs.tsx     # Senior talent, zero tech debt & IP ownership guarantees
│   │   ├── Testimonials.tsx    # Enterprise client reviews & trust scores
│   │   ├── ContactSection.tsx  # Project specification intake & appointment scheduler
│   │   ├── FaqSection.tsx      # Interactive FAQ accordion
│   │   └── Footer.tsx          # Corporate footer with newsletter & compliance badges
│   └── data/
│       └── content.ts          # Central typed content repository (easy to update)
├── package.json
└── tsconfig.json
```

---

## 🛠️ Customization

All copy, services, case studies, technologies, and office locations are cleanly separated in:
`src/data/content.ts`

To update company information, phone numbers, or add new team case studies, simply modify `src/data/content.ts`.

---

## 🌐 Deployment

### Deploy on Vercel
1. Push this repository to GitHub or GitLab.
2. Import the project into [Vercel](https://vercel.com).
3. Vercel automatically detects Next.js and deploys in seconds.

### Deploy with Docker
```dockerfile
FROM node:20-alpine AS runner
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
CMD ["npm", "start"]
```

---

&copy; 2026 **CODEPROGENS INNOVATIONS**. Engineered for scale and resilience.
