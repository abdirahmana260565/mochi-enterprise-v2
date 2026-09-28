import Link from "next/link";
import { LayoutDashboard, BarChart3, FolderKanban, Settings, LogOut, Command, ShieldCheck } from "lucide-react";

export function Sidebar() {
  return <aside className="sidebar">
    <Link href="/" className="sidebrand"><span>m</span> mochi</Link>
    <div className="workspace"><span className="avatar">AC</span><div><b>Acme Corp</b><small>Enterprise</small></div><span>⌄</span></div>
    <nav className="sidenav">
      <small>WORKSPACE</small>
      <Link href="/dashboard"><LayoutDashboard size={17}/> Overview</Link>
      <Link href="/projects"><FolderKanban size={17}/> Projects</Link>
      <Link href="/analytics"><BarChart3 size={17}/> Analytics</Link>
      <small>ADMIN</small>
      <Link href="/settings"><Settings size={17}/> Settings</Link>
      <Link href="#"><ShieldCheck size={17}/> Security</Link>
    </nav>
    <div className="sidebottom"><div><Command size={15}/>⌘ K <span>Search</span></div><Link href="/"><LogOut size={15}/> Sign out</Link></div>
  </aside>
}