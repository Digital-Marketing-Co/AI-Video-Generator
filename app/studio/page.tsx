import Link from "next/link";

export default function Studio(){
 return <main className="shell"><nav className="nav"><strong>VIDEO STUDIO</strong><Link href="/">Home</Link></nav>
 <section className="hero"><div className="eyebrow">Generation workspace</div><h1 className="title">Design. Generate. Persist.</h1><p className="muted">The production pipeline is asynchronous by contract: validate → authorize → estimate → reserve → submit → persist → reconcile.</p></section>
 <section className="grid"><div className="card"><h2>Prompt Composer</h2><textarea aria-label="Video prompt" rows={10} style={{width:"100%",background:"#050816",color:"white",border:"1px solid #ffffff22",borderRadius:16,padding:16}} placeholder="Describe the scene, motion, camera, lighting and style…"/><p><button className="button" disabled>Generation activates after server credentials and database are configured.</button></p></div><div className="card"><h2>Durable status</h2><p className="muted">Generation history is stored in PostgreSQL and outputs are copied into durable object storage rather than transient provider URLs.</p></div></section>
 </main>
}