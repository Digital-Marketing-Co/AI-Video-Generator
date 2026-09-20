# Vercel deployment

Connect `Digital-Marketing-Co/AI-Video-Generator` to Vercel. Framework: Next.js; root: repository root; Node 20+; install: `npm install`; build: `npm run build`.

Use separate Development, Preview, and Production variables from `.env.example`. Never expose provider, auth, database, storage, or Stripe secrets through `NEXT_PUBLIC_*`.

Use pooled PostgreSQL for application traffic and a direct migration URL where supported. Apply version-controlled migrations with `npx prisma migrate deploy`; use expand/contract for breaking changes.

Persist generated media in durable object storage. Vercel Blob is the default adapter; generated media must not depend on function-local storage or temporary provider URLs.

Generation submission must create durable database state and return a generation ID immediately. Prefer verified provider webhooks; otherwise use durable scheduled polling with backoff. Never emulate a queue with memory, globals, setInterval, or a long-running process.

All generation and admin routes require server-side authentication/RBAC before production activation. SUPER_ADMIN generations record internal provider cost while retail billable credits remain zero.

Preview deployments should use isolated/test database, provider, storage and billing credentials. Production deploys from the reviewed production branch.

Set `NEXT_PUBLIC_APP_URL` per environment for canonical URLs, OAuth callbacks and webhooks. Configure the custom domain in Vercel and DNS accordingly.

Rollback through Vercel deployment history while keeping database migrations backward compatible. Active generation state must remain durable across rollback/redeployment.

Quality gate: `npm install`, `npm run build`, `npm run typecheck`, `npm run lint`, unit tests, integration tests and E2E tests, followed by real Preview verification for authentication, RBAC, submission, browser closure/return, duplicate webhook, provider timeout/rate limit, storage failure, database reconnect and redeployment during generation.

Use a generation correlation ID to trace Vercel request → database record → provider request → webhook/poll → storage asset → credit transaction → audit event.
