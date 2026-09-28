import { AppShell } from "../../components/AppShell";
import { Download, Filter } from "lucide-react";

export default function Analytics(){return <AppShell title="Analytics" subtitle="Understand what is happening across Mochi">
 <div className="pageactions"><div className="tabs"><b>Performance</b><span>Usage</span><span>Business</span></div><div><button className="outline"><Filter size={15}/> Filter</button> <button className="outline"><Download size={15}/> Export</button></div></div>
 <div className="analyticsgrid"><div className="panel"><small>DECISION CONFIDENCE</small><strong className="analyticbig">98.7%</strong><p>+4.2% compared to previous period</p></div><div className="panel"><small>EVENT THROUGHPUT</small><strong className="analyticbig">1.84B</strong><p>+18.4% compared to previous period</p></div><div className="panel full"><div className="panelhead"><div><h2>Confidence trend</h2><p>30-day rolling average</p></div></div><div className="linechart"><svg viewBox="0 0 800 240" preserveAspectRatio="none"><polyline points="0,190 70,170 140,180 210,130 280,145 350,110 420,125 490,85 560,100 630,62 700,74 800,35"/></svg></div></div></div>
 </AppShell>}