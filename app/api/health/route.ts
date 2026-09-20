export const runtime="nodejs";
export async function GET(){return Response.json({ok:true,service:"ai-video-generator",timestamp:new Date().toISOString()},{headers:{"Cache-Control":"no-store"}})}