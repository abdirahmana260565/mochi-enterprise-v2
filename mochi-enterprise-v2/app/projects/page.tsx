import { AppShell } from "../../components/AppShell";
import { ArrowUpRight, MoreHorizontal, Plus } from "lucide-react";

const projects=[["Customer Intelligence","Analytics","Active","92%"],["Revenue Operations","Operations","Active","74%"],["Risk Monitor","Security","Review","61%"],["Data Foundation","Infrastructure","Active","88%"]];

export default function Projects(){return <AppShell title="Projects" subtitle="Manage initiatives and intelligent workflows">
 <div className="pageactions"><div className="tabs"><b>All</b><span>Active</span><span>Archived</span></div><button className="primary"><Plus size={16}/> New project</button></div>
 <div className="projects">{projects.map(([name,type,status,progress])=><article key={name}><div className="projecttop"><span className="projecticon">{name[0]}</span><MoreHorizontal size={17}/></div><h2>{name}</h2><p>{type} · Enterprise workspace</p><div className="progress"><i style={{width:progress}}/></div><div className="projectfoot"><span className={status==="Active"?"pill active":"pill"}>{status}</span><span>{progress}</span><a href="/analytics"><ArrowUpRight size={14}/></a></div></article>)}</div>
 </AppShell>}