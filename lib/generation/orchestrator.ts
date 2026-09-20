import type {GenerationProvider,GenerationRequest} from "@/lib/providers/types";
export type GenerationRepository={create(input:{id:string;userId:string;provider:string;model:string;prompt:string;estimatedCostUsd?:number}):Promise<void>;markSubmitted(id:string,providerRequestId:string):Promise<void>;markFailed(id:string,error:string):Promise<void>};
export type CreditService={reserve(userId:string,generationId:string,estimatedUsd:number):Promise<void>;release(userId:string,generationId:string):Promise<void>};
export class GenerationOrchestrator{
 constructor(private repo:GenerationRepository,private credits:CreditService,private provider:GenerationProvider){}
 async submit(userId:string,input:GenerationRequest){const id=crypto.randomUUID();const estimate=0;await this.repo.create({id,userId,provider:this.provider.name,model:input.model,prompt:input.prompt,estimatedCostUsd:estimate});try{await this.credits.reserve(userId,id,estimate);const job=await this.provider.submit(input);await this.repo.markSubmitted(id,job.providerRequestId);return {generationId:id,status:job.status}}catch(e){await this.repo.markFailed(id,e instanceof Error?e.message:"Unknown error");await this.credits.release(userId,id);throw e}}
}
