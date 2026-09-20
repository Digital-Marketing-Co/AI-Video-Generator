import { z } from "zod";
export const runtime="nodejs";
const schema=z.object({prompt:z.string().min(1).max(12000),model:z.string().min(1),durationSeconds:z.number().positive().max(300).optional(),resolution:z.string().optional()});
export async function POST(req:Request){const body=schema.safeParse(await req.json());if(!body.success)return Response.json({error:"Invalid generation request",issues:body.error.issues},{status:400});return Response.json({error:"Generation backend requires configured authentication, database, provider credentials and durable workflow infrastructure."},{status:503,headers:{"Cache-Control":"no-store"}})}
