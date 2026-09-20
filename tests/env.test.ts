import { describe,expect,it } from "vitest";
import { serverEnvSchema } from "@/lib/env";
describe("server env",()=>{
 it("fails closed without core secrets",()=>{expect(()=>serverEnvSchema.parse({APP_ENV:"production"})).toThrow()});
 it("parses feature flags explicitly",()=>{const v=serverEnvSchema.parse({DATABASE_URL:"postgresql://x",AUTH_SECRET:"12345678901234567890123456789012",FEATURE_PUBLIC_SIGNUP:"false",FEATURE_PAID_SUBSCRIPTIONS:"false",FEATURE_CUSTOMER_CREDIT_BILLING:"false",FEATURE_SUPER_ADMIN_GENERATION:"true"});expect(v.FEATURE_PUBLIC_SIGNUP).toBe(false);expect(v.FEATURE_SUPER_ADMIN_GENERATION).toBe(true)});
});
