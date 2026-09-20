import type {GenerationProvider,GenerationRequest,ProviderStatus,ProviderSubmission} from "./types";
export class MuApiProvider implements GenerationProvider{
 name="muapi";
 constructor(private readonly apiKey:string,private readonly baseUrl="https://api.muapi.ai"){}
 private async request(path:string,init:RequestInit={}){const r=await fetch(this.baseUrl+path,{...init,headers:{"Content-Type":"application/json","Authorization":`Bearer ${this.apiKey}`,...(init.headers||{})},cache:"no-store"});if(!r.ok)throw new Error(`MuAPI ${r.status}`);return r.json()}
 async submit(input:GenerationRequest):Promise<ProviderSubmission>{const data=await this.request("/v1/generate",{method:"POST",body:JSON.stringify(input)});return {providerRequestId:String(data.id??data.request_id),status:"queued",estimatedCostUsd:data.estimated_cost}}
 async getStatus(id:string):Promise<ProviderStatus>{const d=await this.request(`/v1/generate/${encodeURIComponent(id)}`);return {status:d.status,outputUrl:d.output_url,actualCostUsd:d.actual_cost,error:d.error}}
}
