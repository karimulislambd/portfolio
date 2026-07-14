"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { profile } from "@/lib/data";

const links = [
  { href: "#projects", label: "Projects" },
  { href: "#publications", label: "Research" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3.5">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight" onClick={() => setOpen(false)}>
          <span className="accent-text">MK</span>
          <span className="text-muted">/islam</span>
        </a>

        <div className="hidden gap-6 text-sm text-muted sm:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-lg border border-border px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-accent hover:text-accent sm:block"
          >
            GitHub
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border sm:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border/70 bg-background/95 px-5 py-3 sm:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground">
                {l.label}
              </a>
            ))}
            <a href={profile.github} target="_blank" rel="noreferrer" onClick={() => setOpen(false)} className="rounded-lg px-2 py-2 text-sm accent-text">
              GitHub
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
