export function webhookIdempotencyKey(provider:string,eventId:string){return `provider:${provider}:event:${eventId}`}
export function generationPollKey(generationId:string,pollCount:number){return `generation:${generationId}:poll:${pollCount}`}
export function nextBackoffMs(attempt:number,{baseMs=5000,maxMs=15*60*1000}:{baseMs?:number;maxMs?:number}={}){
 const exp=Math.min(maxMs,baseMs*Math.pow(2,Math.max(0,attempt)));
 const jitter=Math.floor(exp*0.15);
 return exp-jitter+Math.floor(Math.random()*(jitter*2+1));
}
