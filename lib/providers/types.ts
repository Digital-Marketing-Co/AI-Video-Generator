export type GenerationRequest={prompt:string;model:string;durationSeconds?:number;resolution?:string;callbackUrl?:string};
export type ProviderSubmission={providerRequestId:string;status:"queued"|"processing";estimatedCostUsd?:number};
export type ProviderStatus={status:"queued"|"processing"|"completed"|"failed";outputUrl?:string;actualCostUsd?:number;error?:string};
export interface GenerationProvider{name:string;submit(input:GenerationRequest):Promise<ProviderSubmission>;getStatus(id:string):Promise<ProviderStatus>;verifyWebhook?(rawBody:string,headers:Headers):Promise<boolean>;parseWebhook?(rawBody:string):Promise<{providerRequestId:string;status:ProviderStatus}>}
