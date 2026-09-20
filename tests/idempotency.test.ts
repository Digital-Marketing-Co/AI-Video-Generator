import {describe,expect,it} from "vitest";
import {generationPollKey,nextBackoffMs,webhookIdempotencyKey} from "@/lib/generation/idempotency";
describe("generation idempotency",()=>{
 it("creates stable webhook keys",()=>expect(webhookIdempotencyKey("muapi","evt_1")).toBe("provider:muapi:event:evt_1"));
 it("creates stable poll keys",()=>expect(generationPollKey("g1",3)).toBe("generation:g1:poll:3"));
 it("bounds exponential backoff",()=>{for(let i=0;i<20;i++)expect(nextBackoffMs(i,{baseMs:100,maxMs:1000})).toBeLessThanOrEqual(1150)});
});
