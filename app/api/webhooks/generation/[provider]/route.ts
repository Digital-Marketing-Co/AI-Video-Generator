export const runtime="nodejs";
export async function POST(req:Request,{params}:{params:Promise<{provider:string}>}){
  const {provider}=await params;
  const raw=await req.text();
  if(!raw)return Response.json({error:"Empty webhook"},{status:400});
  return Response.json({accepted:false,provider,message:"Webhook adapter must verify provider signatures before production processing."},{status:501});
}
