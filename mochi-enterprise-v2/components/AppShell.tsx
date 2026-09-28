import { Sidebar } from "./Sidebar";
import { Bell, Search } from "lucide-react";

export function AppShell({ children, title, subtitle }: {children: React.ReactNode; title:string; subtitle:string}) {
  return <div className="app"><Sidebar/><section className="main">
    <header className="apphead"><div><h1>{title}</h1><p>{subtitle}</p></div><div className="headactions"><button><Search size={17}/></button><button><Bell size={17}/></button><span className="user">AM</span></div></header>
    <div className="content">{children}</div>
  </section></div>
}