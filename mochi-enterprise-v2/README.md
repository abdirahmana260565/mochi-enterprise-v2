# Mochi Enterprise v2

A production-oriented SaaS foundation.

## Product surfaces
- Marketing landing page
- Login
- Overview dashboard
- Projects
- Analytics
- Settings

## SDLC architecture
Frontend: Next.js + TypeScript
API: NestJS/REST (integration-ready)
Database: PostgreSQL + Prisma schema included
Cache: Redis (planned integration)
Edge: Cloudflare/Vercel
Auth: OAuth 2.0 + JWT integration point
Testing: Jest + Playwright
Observability: Sentry + PostHog integration points

## Run
npm install
npm run dev

## Production next steps
1. Add NestJS API app and environment validation.
2. Connect Prisma to PostgreSQL.
3. Add Redis caching/queues.
4. Implement OAuth/JWT session flow.
5. Add RBAC: Owner / Admin / Analyst / Viewer.
6. Add Jest API tests and Playwright critical journeys.
7. Add GitHub Actions, Sentry and PostHog.
