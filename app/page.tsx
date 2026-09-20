const pillars=[
  ["Durable orchestration","Generation requests return immediately and persist through redeployments."],
  ["Provider independent","MuAPI starts the provider layer without coupling routes to one vendor."],
  ["Commercial foundation","Credits, subscriptions, cost accounting and feature flags are first-class."],
  ["Vercel native","Stateless compute, PostgreSQL, object storage and asynchronous jobs by design."]
];
export default function Home(){
 return <main className="shell">
  <nav className="nav"><strong>AI VIDEO GENERATOR</strong><span className="muted">SUPER ADMIN CONTROL PLANE</span></nav>
  <section className="hero"><div className="eyebrow">Open Generative AI · production refactor</div><h1 className="title">Cinematic intelligence, orchestrated for the web.</h1><p className="muted">A Vercel-native AI video creation platform engineered for durable jobs, provider independence, media persistence and future global credit billing.</p><p><a className="button" href="/studio">Enter Video Studio</a></p></section>
  <section className="grid">{pillars.map(([a,b])=><article className="card" key={a}><div className="metric">{a}</div><p className="muted">{b}</p></article>)}</section>
 </main>
}