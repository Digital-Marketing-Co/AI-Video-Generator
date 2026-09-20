import { z } from "zod";
const boolean=z.enum(["true","false"]).transform(v=>v==="true");
export const serverEnvSchema=z.object({
 APP_ENV:z.enum(["development","preview","production"]).default("development"),
 DATABASE_URL:z.string().min(1),
 DIRECT_URL:z.string().min(1).optional(),
 AUTH_SECRET:z.string().min(32),
 MUAPI_API_KEY:z.string().min(1).optional(),
 MUAPI_BASE_URL:z.string().url().default("https://api.muapi.ai"),
 BLOB_READ_WRITE_TOKEN:z.string().min(1).optional(),
 STRIPE_SECRET_KEY:z.string().min(1).optional(),
 STRIPE_WEBHOOK_SECRET:z.string().min(1).optional(),
 FEATURE_PUBLIC_SIGNUP:boolean.default(false),
 FEATURE_PAID_SUBSCRIPTIONS:boolean.default(false),
 FEATURE_CUSTOMER_CREDIT_BILLING:boolean.default(false),
 FEATURE_SUPER_ADMIN_GENERATION:boolean.default(true)
});
export function getServerEnv(){return serverEnvSchema.parse(process.env)}
