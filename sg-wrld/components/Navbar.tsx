"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

const wa = `https://wa.me/${site.whatsapp}`;

const navLinks = [
  { label: "Divisions", href: "#divisions" },
  { label: "Catalog", href: "#catalog" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-plan/15 bg-paper/95 py-3 backdrop-blur-xl shadow-md"
          : "bg-paper/80 py-5 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Brand Monogram & Wordmark (30% Burgundy + 10% HiVis Accent) */}
        <a href="#top" className="group flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-plan shadow-md transition-transform duration-300 group-hover:scale-105">
            <span className="font-display text-base font-extrabold tracking-tighter text-paper">
              SG
            </span>
            <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 rounded-full border-2 border-paper bg-hivis" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xl font-extrabold tracking-tight text-plan leading-none">
              {site.name}
            </span>
            <span className="mt-1 font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-plan-muted">
              {site.tagline}
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-plan/80 transition-colors hover:text-hivis"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Actions (30% Burgundy Outline + 10% HiVis CTA) */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-plan/25 bg-paper-light px-4 py-2 text-xs font-bold text-plan transition hover:border-plan hover:bg-plan hover:text-paper"
          >
            <Phone className="h-3.5 w-3.5 text-hivis" />
            <span>{site.phoneDisplay}</span>
          </a>
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-hivis px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-plan-deep shadow-lg shadow-hivis/25 transition hover:bg-hivis-light"
          >
            <span>WhatsApp Desk</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-plan/20 bg-paper-light text-plan md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-plan/15 bg-paper-light px-5 pb-6 pt-4 shadow-xl md:hidden">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-3 py-2.5 text-base font-bold text-plan transition hover:bg-paper"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-5 grid grid-cols-2 gap-3 border-t border-plan/15 pt-5">
            <a
              href={`tel:${site.phone}`}
              className="flex items-center justify-center gap-2 rounded-xl border border-plan/25 bg-paper py-3 text-xs font-bold text-plan"
            >
              <Phone className="h-3.5 w-3.5 text-hivis" />
              Call Now
            </a>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 rounded-xl bg-hivis py-3 text-xs font-bold uppercase tracking-wider text-plan-deep"
            >
              WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
