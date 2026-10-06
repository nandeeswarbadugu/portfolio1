"use client";

import { useState } from "react";
import { nav, profile } from "@/lib/content";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-mono text-sm tracking-[0.18em] text-ink">
          {profile.shortName}
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-[0.16em] text-accent"
          >
            GitHub
          </a>
        </nav>
        <button
          type="button"
          className="font-mono text-xs uppercase tracking-[0.16em] text-muted md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="flex flex-col gap-3 border-t border-line px-5 py-4 md:hidden"
          aria-label="Mobile"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-mono text-sm uppercase tracking-[0.14em] text-ink"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-sm uppercase tracking-[0.14em] text-accent"
          >
            GitHub
          </a>
        </nav>
      ) : null}
    </header>
  );
}
