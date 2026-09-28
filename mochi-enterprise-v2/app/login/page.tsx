import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Login() {
  return <main className="auth"><div className="auth-card">
    <Link href="/" className="back"><ArrowLeft size={15}/> Mochi</Link>
    <div className="auth-brand"><span>m</span></div>
    <h1>Welcome back.</h1><p>Sign in to your Mochi workspace.</p>
    <label>Work email<input placeholder="you@company.com" type="email"/></label>
    <label>Password<input placeholder="••••••••••••" type="password"/></label>
    <Link href="/dashboard" className="primary authbtn">Continue <ArrowRight size={16}/></Link>
    <small className="legal">By continuing, you agree to Mochi's Terms and Privacy Policy.</small>
  </div></main>
}