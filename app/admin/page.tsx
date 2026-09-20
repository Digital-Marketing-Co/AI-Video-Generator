import Link from "next/link";

const routes=["generations","models","providers","usage","costs","credits","subscriptions","users","organizations","queues","storage","audit","system"];

export default function Admin(){
  return <main className="shell">
    <nav className="nav"><strong>ADMIN OPERATIONS CENTER</strong><Link href="/">Home</Link></nav>
    <section className="hero"><div className="eyebrow">Super administrator</div><h1 className="title">Control plane.</h1></section>
    <section className="grid">{routes.map(r=><Link className="card" key={r} href={"/admin/"+r}><strong>/{r}</strong><p className="muted">Operational view prepared for server-side RBAC and production telemetry.</p></Link>)}</section>
  </main>
}