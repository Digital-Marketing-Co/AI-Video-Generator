import Link from "next/link";
import { notFound } from "next/navigation";

const allowed=new Set(["generations","models","providers","usage","costs","credits","subscriptions","users","organizations","queues","storage","audit","system"]);

export default async function Section({params}:{params:Promise<{section:string}>}){
  const {section}=await params;
  if(!allowed.has(section))notFound();
  return <main className="shell"><nav className="nav"><Link href="/admin">← Admin</Link><strong>{section.toUpperCase()}</strong></nav><section className="hero"><div className="eyebrow">Operations module</div><h1 className="title">{section}</h1><p className="muted">Production data is intentionally unavailable until PostgreSQL, authentication and provider credentials are configured.</p></section></main>
}