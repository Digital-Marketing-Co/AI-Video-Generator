# AI Video Generator

Vercel-native production architecture for a multimodal AI video-generation platform, based on the MIT-licensed Open Generative AI project.

## Architecture

GitHub → Vercel → Next.js App Router → React + TypeScript → PostgreSQL/Prisma → durable generation workflow → object storage → external AI video providers.

The `vercel-native-platform` branch establishes the production control plane, schema, provider/storage abstractions, admin route surface, feature-flag defaults, analytics integration, and deployment documentation.

## Runtime rules

No Electron runtime, localhost dependency, local inference binary, function-local durable state, or in-memory job queue is permitted in production. Generation must be asynchronous and durable. Provider secrets remain server-side.

## Commercial foundation

The schema includes users, organizations, workspaces, projects, scenes, shots, generations, provider/model metadata, pricing, media assets, immutable credit transactions, subscriptions, invoices, billing events, audit events and feature flags. Paid customer features default off while super-admin generation is designed to record real provider cost with zero retail billable credits.

See `VERCEL_DEPLOYMENT.md` for deployment requirements and `NOTICE.md` for upstream attribution.
