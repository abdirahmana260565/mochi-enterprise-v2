'use client';

import React from 'react';
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#d4ff33] selection:text-black font-sans relative overflow-x-hidden">
      {/* Dynamic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#d4ff33]/15 to-transparent blur-[120px] pointer-events-none rounded-full" />

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#d4ff33] rounded-xl flex items-center justify-center text-black font-bold text-xl shadow-[0_0_20px_rgba(212,255,51,0.3)]">
            m
          </div>
          <span className="text-xl font-extrabold tracking-tight">mochi</span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-xs font-semibold px-4 py-2.5 rounded-full bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800 transition-all text-zinc-300 hover:text-white"
          >
            Sign In ↗️
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-5xl mx-auto px-6 pt-16 pb-24 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-400 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#d4ff33] animate-pulse" />
          ENTERPRISE INTELLIGENCE
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          Complex work. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-500">
            Made clear.
          </span>
        </h1>

        <p className="text-base md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Mochi brings data, intelligence, and operations into one calm enterprise workspace.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Link
            href="/login"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#d4ff33] hover:bg-[#c2f026] text-black font-bold rounded-2xl text-sm transition-all shadow-[0_0_25px_rgba(212,255,51,0.25)] hover:scale-105 active:scale-95"
          >
            Enter dashboard ↗️
          </Link>
          <a
            href="#architecture"
            className="w-full sm:w-auto px-8 py-3.5 bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white font-semibold rounded-2xl text-sm transition-all backdrop-blur-md"
          >
            Explore platform
          </a>
        </div>

        {/* Dashboard Preview Widget */}
        <div className="w-full max-w-3xl mx-auto bg-zinc-900/50 border border-zinc-800/80 rounded-3xl p-6 md:p-8 backdrop-blur-xl shadow-2xl text-left relative overflow-hidden group hover:border-zinc-700/80 transition-all">
          <div className="flex items-center justify-between text-xs text-zinc-500 mb-4 pb-4 border-b border-zinc-800/60">
            <span className="flex items-center gap-2 font-mono">
              <span className="w-2 h-2 rounded-full bg-[#d4ff33]" />
              ALL SYSTEMS OPERATIONAL
            </span>
            <span className="font-mono">MOCHI CORE - ACTIVE</span>
          </div>

          <div className="space-y-1">
            <p className="text-xs text-zinc-400">Decision confidence</p>
            <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
              98.7%
            </div>
            <p className="text-xs text-[#d4ff33] font-medium pt-1">↑ 4.2% this month</p>
          </div>

          {/* Animated Bar Graph */}
          <div className="mt-8 flex items-end gap-2 h-28 pt-4">
            {[40, 65, 45, 75, 55, 80, 70, 95, 85, 100].map((height, i) => (
              <div
                key={i}
                className="flex-1 bg-zinc-800 group-hover:bg-[#d4ff33]/80 rounded-t-lg transition-all duration-500"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Architecture Section (Fixed Layout) */}
      <section id="architecture" className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900">
        <div className="mb-12 text-left">
          <span className="text-xs font-mono text-[#d4ff33] tracking-widest uppercase block mb-2">
            02 / ARCHITECTURE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Designed for scale. <br />
            <span className="text-zinc-500">Ready for production.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { num: '01', title: 'Next.js / TypeScript', desc: 'Type-safe React framework' },
            { num: '02', title: 'REST API / NestJS', desc: 'Scalable backend service' },
            { num: '03', title: 'PostgreSQL / Prisma', desc: 'Reliable data layer' },
            { num: '04', title: 'Redis / Cloudflare', desc: 'Global caching & security' },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-zinc-800/80 rounded-2xl p-6 hover:border-[#d4ff33]/50 transition-all duration-300"
            >
              <span className="text-xs font-mono text-zinc-500 block mb-3">{item.num}</span>
              <h3 className="font-semibold text-white text-base mb-1">{item.title}</h3>
              <p className="text-xs text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Security Section (Fixed Layout) */}
      <section className="max-w-6xl mx-auto px-6 py-24 border-t border-zinc-900">
        <div className="bg-gradient-to-b from-zinc-900/60 to-zinc-950 border border-zinc-800/80 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <span className="text-xs font-mono text-[#d4ff33] tracking-widest uppercase block mb-3">
            03 / SECURITY
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-xl mb-6">
            Security belongs in the system.
          </h2>
          <p className="text-sm md:text-base text-zinc-400 max-w-xl mb-8 leading-relaxed">
            TLS encryption · OAuth 2.0 · JWT · OWASP protections · Rate limiting · Audit logging · Automated testing.
          </p>

          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#d4ff33] text-black font-bold rounded-xl text-sm hover:bg-[#c2f026] transition"
          >
            Open Mochi ↗️
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-zinc-900 text-center text-xs text-zinc-600">
        ©️ {new Date().getFullYear()} Mochi Enterprise. All rights reserved.
      </footer>
    </div>
  );
}
