import { AppShell } from "../../components/AppShell";
import { ArrowUpRight, CheckCircle2, Clock3, Database, MoreHorizontal, TrendingUp } from "lucide-react";

const data=[["Total events","1,842,291","+18.4%"],["Active workflows","284","+9.2%"],["Avg. response","42ms","-12.1%"],["Decision confidence","98.7%","+4.2%"]];

export default function Dashboard(){
 return <AppShell title="Overview" subtitle="Monday, September 28, 2026 · Enterprise workspace">
  <div className="dashgrid">{data.map(([a,b,c])=><div className="metric" key={a}><div><span>{a}</span><MoreHorizontal size={16}/></div><b>{b}</b><small><TrendingUp size={12}/> {c} <em>vs last month</em></small></div>)}</div>
  <div className="dashboard-row"><section className="panel wide"><div className="panelhead"><div><h2>Platform activity</h2><p>Events processed across your workspace</p></div><button>Last 30 days⌄</button></div><div className="bigchart">{[42,55,47,68,61,74,65,82,72,91,78,96,87,99,89,95,92,100,94,98].map((x,i)=><i key={i} style={{height:`${x}%`}}/>)}</div><div className="chartlabels"><span>Sep 01</span><span>Sep 15</span><span>Sep 28</span></div></section>
  <section className="panel"><div className="panelhead"><div><h2>System health</h2><p>All core services</p></div></div><div className="health"><CheckCircle2/><b>Operational</b><span>99.99% uptime</span></div><div className="healthrow"><Database size={16}/><span>Data pipeline</span><strong>42ms</strong></div><div className="healthrow"><Clock3 size={16}/><span>API latency</span><strong>18ms</strong></div></section></div>
  <section className="panel"><div className="panelhead"><div><h2>Recent activity</h2><p>Latest events in your workspace</p></div><a href="/analytics">View all <ArrowUpRight size={14}/></a></div><div className="activity"><div><span className="status green"/>Analytics pipeline completed<b>2 min ago</b></div><div><span className="status"/>Customer data synced<b>18 min ago</b></div><div><span className="status"/>Security scan completed<b>42 min ago</b></div></div></section>
 </AppShell>
}