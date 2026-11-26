"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { divisions } from "@/lib/site";

interface ServiceExplorerProps {
  onSelectService?: (serviceTitle: string) => void;
}

export default function ServiceExplorer({ onSelectService }: ServiceExplorerProps) {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredDivisions =
    activeTab === "all"
      ? divisions
      : divisions.filter((d) => d.id === activeTab);

  const handleRequestQuote = (title: string) => {
    if (onSelectService) {
      onSelectService(title);
    }
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Filter Pills */}
      <div className="mb-10 flex flex-wrap items-center gap-2.5">
        <button
          type="button"
          onClick={() => setActiveTab("all")}
          className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition ${
            activeTab === "all"
              ? "bg-plan text-paper shadow-md"
              : "border border-plan/20 bg-paper-light text-plan hover:border-plan"
          }`}
        >
          All Services (11)
        </button>
        {divisions.map((div) => (
          <button
            key={div.id}
            type="button"
            onClick={() => setActiveTab(div.id)}
            className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition ${
              activeTab === div.id
                ? "bg-plan text-paper shadow-md"
                : "border border-plan/20 bg-paper-light text-plan hover:border-plan"
            }`}
          >
            {div.code} · {div.name}
          </button>
        ))}
      </div>

      {/* Divisions & Service Cards */}
      <div className="space-y-14">
        {filteredDivisions.map((division) => (
          <div key={division.id} className="space-y-6">
            <div className="flex flex-col justify-between gap-2 border-b border-plan/15 pb-4 sm:flex-row sm:items-end">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-hivis">
                  Division {division.code}
                </span>
                <h3 className="mt-1 font-display text-2xl font-extrabold text-plan sm:text-3xl">
                  {division.name}
                </h3>
              </div>
              <p className="max-w-md text-sm font-medium text-plan-muted">
                {division.subtitle}
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {division.services.map((service) => (
                <div
                  key={service.id}
                  className="arch-card group flex flex-col justify-between rounded-2xl p-6"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-plan font-mono text-xs font-bold text-paper">
                        {division.code}
                      </span>
                      {service.badge && (
                        <span className="inline-flex items-center gap-1 rounded-full border border-hivis/35 bg-hivis/15 px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-wider text-plan">
                          <Sparkles className="h-2.5 w-2.5 text-hivis" />
                          {service.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="mt-5 font-display text-xl font-extrabold text-plan transition-colors group-hover:text-hivis-dark">
                      {service.title}
                    </h4>
                    <p className="mt-2.5 text-sm leading-relaxed text-plan/80">
                      {service.summary}
                    </p>

                    <ul className="mt-5 space-y-2 border-t border-plan/12 pt-4">
                      {service.highlights.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-xs font-semibold text-plan"
                        >
                          <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-hivis" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-2">
                    <button
                      type="button"
                      onClick={() => handleRequestQuote(service.title)}
                      className="inline-flex w-full items-center justify-between rounded-xl border border-plan/20 bg-paper px-4 py-3 text-xs font-bold uppercase tracking-wider text-plan transition group-hover:border-hivis group-hover:bg-hivis group-hover:text-plan-deep"
                    >
                      <span>Request Quote</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
