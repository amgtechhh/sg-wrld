import Image from "next/image";
import {
  ArrowUpRight,
  Phone,
  Compass,
  Layers,
  Shield,
  Sparkles,
} from "lucide-react";
import { site, divisions, metrics, processSteps, serviceNames } from "@/lib/site";
import Navbar from "@/components/Navbar";
import InteractiveWorkspace from "@/components/InteractiveWorkspace";

const wa = `https://wa.me/${site.whatsapp}`;

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-paper text-plan">
      <Navbar />

      <main>
        {/* 60% DOMINANT PAPER HERO SECTION */}
        <section className="relative overflow-hidden paper-blueprint pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
              {/* Left Column: Editorial Headline */}
              <div>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-plan/20 bg-paper-light px-4 py-1.5 shadow-sm">
                  <span className="h-2 w-2 rounded-full bg-hivis" />
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-plan">
                    {site.tagline} · Integrated Solutions
                  </span>
                </div>

                <h1 className="mt-7 font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-plan sm:text-6xl lg:text-7xl">
                  Plan it.{" "}
                  <span className="text-hivis">
                    Build it.
                  </span>{" "}
                  Keep it standing.
                </h1>

                <p className="mt-7 max-w-xl text-base font-medium leading-relaxed text-plan/85 sm:text-lg">
                  SG wrld unites architectural drawing, turnkey building construction, hybrid solar engineering, wholesale building materials, real estate, heavy-duty logistics, and luxury lifestyle services—so one call moves your entire vision forward.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-hivis px-7 py-4 text-sm font-extrabold uppercase tracking-wider text-plan-deep shadow-xl shadow-hivis/25 transition hover:bg-hivis-light"
                  >
                    <span>Start on WhatsApp</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#catalog"
                    className="inline-flex items-center gap-2 rounded-full border-2 border-plan bg-transparent px-7 py-4 text-sm font-bold text-plan transition hover:bg-plan hover:text-paper"
                  >
                    <span>Explore 11 Services</span>
                  </a>
                </div>

                {/* Architectural Scale Rule */}
                <div className="mt-14 flex items-center gap-4 text-plan/75" aria-hidden="true">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest">
                    01 // ARCHITECTURE
                  </span>
                  <span className="h-px flex-1 bg-plan/25" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest">
                    02 // SUPPLY
                  </span>
                  <span className="h-px flex-1 bg-plan/25" />
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest">
                    03 // LIFESTYLE
                  </span>
                </div>
              </div>

              {/* Right Column: Architectural Visual Showcase Card */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border-2 border-plan/20 bg-plan shadow-2xl">
                  <div className="relative aspect-[4/4.6] w-full">
                    <Image
                      src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                      alt="Modern architectural residence representing SG wrld Aesthetic Life"
                      fill
                      priority
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-plan-deep/90 via-plan/20 to-transparent" />
                  </div>

                  {/* Floating Spec Badge */}
                  <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-paper/25 bg-plan/95 p-5 text-paper backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-hivis">
                        Turnkey Execution
                      </span>
                      <span className="rounded-full bg-hivis px-2.5 py-0.5 font-mono text-[10px] font-extrabold text-plan-deep">
                        {site.phoneDisplay}
                      </span>
                    </div>
                    <p className="mt-2 font-display text-lg font-bold text-paper">
                      Blueprint, Solar, Materials & Real Estate
                    </p>
                    <p className="mt-1 text-xs text-paper/80">
                      Complete lifecycle engineering with dedicated maintenance across every division.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Metrics Strip */}
            <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="arch-card rounded-2xl p-6"
                >
                  <div className="font-display text-3xl font-extrabold text-plan sm:text-4xl">
                    {m.value}
                  </div>
                  <div className="mt-1.5 text-sm font-bold text-hivis-dark">
                    {m.label}
                  </div>
                  <div className="mt-0.5 text-xs font-medium text-plan-muted">{m.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 30% BURGUNDY MARQUEE CAPABILITIES RIBBON */}
        <div className="overflow-hidden border-y border-plan/20 bg-plan py-4">
          <div className="flex w-max animate-marquee items-center gap-8">
            {[...serviceNames, ...serviceNames].map((item, idx) => (
              <div key={`${item}-${idx}`} className="flex items-center gap-8">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-paper">
                  {item}
                </span>
                <Sparkles className="h-3.5 w-3.5 text-hivis" />
              </div>
            ))}
          </div>
        </div>

        {/* 60% PAPER SURFACE: THREE CORE PILLARS / DIVISIONS */}
        <section id="divisions" className="relative bg-paper py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-hivis">
                Core Ecosystem
              </span>
              <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight text-plan sm:text-5xl">
                Three specialized divisions. One unified standard.
              </h2>
              <p className="mt-4 text-base font-medium text-plan/80">
                Designed to eliminate contractor fragmentation—combining structural engineering, wholesale materials, and executive property & lifestyle services.
              </p>
            </div>

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {divisions.map((div) => (
                <article
                  key={div.id}
                  className="arch-card group flex flex-col justify-between overflow-hidden rounded-3xl"
                >
                  <div>
                    <div className="relative h-60 w-full overflow-hidden">
                      <Image
                        src={div.image}
                        alt={div.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-plan-deep/75 via-transparent to-transparent" />
                      <span className="absolute left-5 top-5 rounded-full bg-plan px-3.5 py-1 font-mono text-xs font-bold text-paper shadow-md">
                        DIVISION {div.code}
                      </span>
                    </div>

                    <div className="p-7">
                      <h3 className="font-display text-2xl font-extrabold text-plan">
                        {div.name}
                      </h3>
                      <p className="mt-1 font-mono text-xs font-bold uppercase tracking-wider text-hivis-dark">
                        {div.subtitle}
                      </p>
                      <p className="mt-4 text-sm leading-relaxed text-plan/80">
                        {div.description}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {div.services.map((s) => (
                          <span
                            key={s.id}
                            className="rounded-lg border border-plan/15 bg-paper px-2.5 py-1 text-xs font-semibold text-plan"
                          >
                            {s.title}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-plan/15 bg-paper-light/60 px-7 py-4">
                    <a
                      href="#catalog"
                      className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-plan transition group-hover:text-hivis"
                    >
                      <span>View Division Specs</span>
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 30% BURGUNDY BAND: HOW WE WORK / EXECUTION PROCESS */}
        <section id="process" className="border-t border-plan/20 bg-plan py-24 text-paper">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:items-center">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-hivis">
                  Seamless Delivery
                </span>
                <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-paper sm:text-4xl">
                  Built for speed, clarity, and longevity.
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-paper/85">
                  Whether commissioning an architectural blueprint, ordering bulk cement and roofing iron, or booking a 5-star stay, our workflow stays direct and accountable.
                </p>
                <div className="mt-7 flex flex-wrap items-center gap-4 text-xs font-semibold text-paper">
                  <span className="flex items-center gap-1.5">
                    <Compass className="h-4 w-4 text-hivis" /> Precision Plans
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Layers className="h-4 w-4 text-hivis" /> Verified Stock
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield className="h-4 w-4 text-hivis" /> Full Maintenance
                  </span>
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-3">
                {processSteps.map((item) => (
                  <div
                    key={item.step}
                    className="rounded-2xl border border-paper/20 bg-plan-deep/55 p-6 backdrop-blur-sm"
                  >
                    <span className="font-display text-3xl font-extrabold text-hivis">
                      {item.step}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-paper">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-paper/80">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTERACTIVE CATALOG (60% PAPER) & QUOTE WORKSPACE (30% BURGUNDY) */}
        <InteractiveWorkspace />
      </main>

      {/* DEEP BURGUNDY FOOTER */}
      <footer className="border-t border-paper/15 bg-plan-deep pt-16 pb-10 text-paper">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-10 border-b border-paper/15 pb-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-hivis font-display text-base font-extrabold text-plan-deep">
                  SG
                </div>
                <div>
                  <span className="font-display text-xl font-extrabold tracking-tight text-paper">
                    {site.name}
                  </span>
                  <span className="block font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-hivis">
                    {site.tagline}
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-paper/80">
                Architectural design, construction, electrical & solar energy, building materials, automotive restoration, real estate, heavy-duty truck charter, 5-star hospitality, and bespoke event styling.
              </p>
            </div>

            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-hivis">
                Navigation
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
                <li><a href="#divisions" className="hover:text-hivis">Core Divisions</a></li>
                <li><a href="#catalog" className="hover:text-hivis">Service Catalog</a></li>
                <li><a href="#process" className="hover:text-hivis">Execution Process</a></li>
                <li><a href="#contact" className="hover:text-hivis">Request a Quote</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-hivis">
                Direct Desk
              </h4>
              <ul className="mt-4 space-y-2.5 text-sm text-paper/80">
                <li>
                  <a href={`tel:${site.phone}`} className="inline-flex items-center gap-2 hover:text-hivis">
                    <Phone className="h-3.5 w-3.5 text-hivis" />
                    {site.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${site.email}`} className="hover:text-hivis">
                    {site.email}
                  </a>
                </li>
                <li>
                  <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-hivis">
                    Instagram: @sgwrld
                  </a>
                </li>
                <li>
                  <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-hivis">
                    Facebook: SG wrld
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 text-xs text-paper/70 sm:flex-row">
            <p>© {new Date().getFullYear()} {site.name} ({site.tagline}). All rights reserved.</p>
            <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-hivis">
              Plan It · Build It · Keep It Standing
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
