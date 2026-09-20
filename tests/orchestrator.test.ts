import { describe,expect,it } from "vitest";
import { GenerationOrchestrator } from "@/lib/generation/orchestrator";
import type { GenerationProvider } from "@/lib/providers/types";

describe("GenerationOrchestrator",()=>{
  it("persists before provider submission and returns durable generation id",async()=>{
    const calls:string[]=[];
    const repo={create:async()=>{calls.push("create")},markSubmitted:async()=>{calls.push("submitted")},markFailed:async()=>{calls.push("failed")}};
    const credits={reserve:async()=>{calls.push("reserve")},release:async()=>{calls.push("release")}};
    const provider:GenerationProvider={name:"test",submit:async()=>{calls.push("provider");return {providerRequestId:"p1",status:"queued"}},getStatus:async()=>({status:"queued"})};
    const result=await new GenerationOrchestrator(repo,credits,provider).submit("u1",{prompt:"x",model:"m"});
    expect(result.generationId).toBeTruthy();
    expect(calls).toEqual(["create","reserve","provider","submitted"]);
  });

  it("records failure and releases reservation",async()=>{
    const calls:string[]=[];
    const repo={create:async()=>{calls.push("create")},markSubmitted:async()=>{},markFailed:async()=>{calls.push("failed")}};
    const credits={reserve:async()=>{calls.push("reserve")},release:async()=>{calls.push("release")}};
    const provider:GenerationProvider={name:"test",submit:async()=>{throw new Error("provider down")},getStatus:async()=>({status:"failed"})};
    await expect(new GenerationOrchestrator(repo,credits,provider).submit("u1",{prompt:"x",model:"m"})).rejects.toThrow("provider down");
    expect(calls).toEqual(["create","reserve","failed","release"]);
  });
});
