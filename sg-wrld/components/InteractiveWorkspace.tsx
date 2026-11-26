"use client";

import { useState } from "react";
import ServiceExplorer from "./ServiceExplorer";
import QuoteForm from "./QuoteForm";
import { Phone, Mail, Instagram, Globe, ArrowUpRight, ShieldCheck } from "lucide-react";
import { site } from "@/lib/site";

export default function InteractiveWorkspace() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  return (
    <>
      {/* 60% DOMINANT PAPER SURFACE: Full Service Catalog */}
      <section id="catalog" className="relative border-t border-plan/15 bg-paper py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-hivis">
                Complete Capabilities Index
              </span>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-plan sm:text-5xl">
                Every discipline under one roof.
              </h2>
            </div>
            <p className="max-w-md text-sm font-medium leading-relaxed text-plan/80">
              Filter by division or select any service below to pre-load your project inquiry with our coordination desk. Every technical installation includes ongoing maintenance support.
            </p>
          </div>

          <ServiceExplorer onSelectService={(title) => setSelectedService(title)} />
        </div>
      </section>

      {/* 30% SECONDARY BURGUNDY SURFACE: Contact & Quote Dispatch */}
      <section id="contact" className="relative overflow-hidden border-t border-plan/20 plan-blueprint py-24 text-paper sm:py-32">
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[1fr_1.15fr] lg:items-start">
          <div>
            <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-hivis">
              Initiate Collaboration
            </span>
            <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-paper sm:text-5xl">
              Tell us what you’re building or sourcing.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-paper/85">
              Whether you need full architectural drawings, wholesale building materials delivered to site, a hybrid solar grid, or 5-star hospitality arrangements—one conversation sets everything in motion.
            </p>

            {/* Direct Channels */}
            <div className="mt-10 grid gap-3.5 sm:grid-cols-2">
              <a
                href={`tel:${site.phone}`}
                className="group flex items-center justify-between rounded-2xl border border-paper/20 bg-plan-deep/60 p-4 backdrop-blur-md transition hover:border-hivis"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-hivis text-plan-deep">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-paper/70">
                      Direct Line
                    </div>
                    <div className="text-sm font-bold text-paper">
                      {site.phoneDisplay}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-paper/60 transition group-hover:text-hivis" />
              </a>

              <a
                href={`mailto:${site.email}`}
                className="group flex items-center justify-between rounded-2xl border border-paper/20 bg-plan-deep/60 p-4 backdrop-blur-md transition hover:border-hivis"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-hivis text-plan-deep">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-paper/70">
                      Official Email
                    </div>
                    <div className="text-sm font-bold text-paper">
                      {site.email}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-paper/60 transition group-hover:text-hivis" />
              </a>

              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-paper/20 bg-plan-deep/60 p-4 backdrop-blur-md transition hover:border-hivis"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-hivis text-plan-deep">
                    <Instagram className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-paper/70">
                      Instagram
                    </div>
                    <div className="text-sm font-bold text-paper">@sgwrld</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-paper/60 transition group-hover:text-hivis" />
              </a>

              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-paper/20 bg-plan-deep/60 p-4 backdrop-blur-md transition hover:border-hivis"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-hivis text-plan-deep">
                    <Globe className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-paper/70">
                      Facebook
                    </div>
                    <div className="text-sm font-bold text-paper">SG wrld</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-paper/60 transition group-hover:text-hivis" />
              </a>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-paper/20 bg-plan-deep/70 p-4 text-xs leading-relaxed text-paper/90">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-hivis" />
              <p>
                <strong className="text-paper">Single-Point Accountability:</strong> From blueprint sign-off to material haulage and post-completion maintenance, your project is coordinated directly through SG wrld.
              </p>
            </div>
          </div>

          <QuoteForm selectedService={selectedService} />
        </div>
      </section>
    </>
  );
}
