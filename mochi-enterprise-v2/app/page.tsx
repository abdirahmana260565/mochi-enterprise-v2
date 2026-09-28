import Link from "next/link";
import { ArrowUpRight, Brain, Database, ShieldCheck, Activity, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main>
      <nav className="topnav">
        <Link href="/" className="brand"><span>m</span> mochi</Link>
        <div className="navlinks"><a href="#platform">Platform</a><a href="#architecture">Architecture</a><a href="#security">Security</a></div>
        <Link href="/login" className="navbutton">Open workspace <ArrowUpRight size={15}/></Link>
      </nav>
      <section className="hero container">
        <div className="eyebrow"><Sparkles size={14}/> ENTERPRISE INTELLIGENCE</div>
        <h1>Complex work.<br/><em>Made clear.</em></h1>
        <p>Mochi brings data, intelligence and operations into one calm enterprise workspace.</p>
        <div className="actions"><Link href="/dashboard" className="primary">Enter dashboard <ArrowUpRight size={16}/></Link><a href="#platform" className="secondary">Explore platform</a></div>
        <div className="hero-panel">
          <div className="panelbar"><span><i/> ALL SYSTEMS OPERATIONAL</span><span>MOCHI CORE · 02:41:08</span></div>
          <div className="hero-metrics"><div><small>Decision confidence</small><b>98.7%</b><span>↑ 4.2% this month</span></div><div className="bars">{[35,52,45,68,55,73,62,88,77,94,81,97].map((x,i)=><i key={i} style={{height:`${x}%`}}/>)}</div></div>
        </div>
      </section>
      <section className="trust container"><div><b>99.99%</b><small>uptime</small></div><div><b>1.8B+</b><small>events processed</small></div><div><b>42ms</b><small>median response</small></div><div><b>24/7</b><small>monitoring</small></div></section>
      <section id="platform" className="container section"><div className="eyebrow">01 / PLATFORM</div><h2>One operating layer<br/><em>for your enterprise.</em></h2><div className="feature-grid">{[
        [Brain,"Intelligence","Turn complex signals into clear, actionable decisions."],
        [Database,"Unified data","Connect operational data, analytics and workflows."],
        [Activity,"Live analytics","See business performance as it changes."],
        [ShieldCheck,"Enterprise security","Modern security controls from the foundation up."]
      ].map(([Icon,title,text]) => <article key={String(title)}><div className="icon"><Icon size={20}/></div><h3>{String(title)}</h3><p>{String(text)}</p><a href="/dashboard">Explore →</a></article>)}</div></section>
      <section id="architecture" className="architecture"><div className="container"><div className="eyebrow">02 / ARCHITECTURE</div><h2>Designed for scale.<br/><em>Ready for production.</em></h2><div className="archgrid">{["Next.js / TypeScript","REST API / NestJS","PostgreSQL / Prisma","Redis / Cloudflare"].map((x,i)=><div key={x}><small>0{i+1}</small><b>{x}</b></div>)}</div></div></section>
      <section id="security" className="container security"><div><div className="eyebrow">03 / SECURITY</div><h2>Security belongs<br/><em>in the system.</em></h2></div><div className="securitycopy"><p>TLS encryption · OAuth 2.0 · JWT · OWASP protections · rate limiting · audit logging · automated testing.</p><Link href="/dashboard" className="primary">Open Mochi <ArrowUpRight size={16}/></Link></div></section>
      <footer className="container"><span>© 2026 Mochi Technologies</span><span>Privacy · Security · Status</span></footer>
    </main>
  );
}