"use client";

import { useState, useEffect, type FormEvent } from "react";
import { Send, MapPin, Calendar, Layers, User } from "lucide-react";
import { site, serviceNames } from "@/lib/site";

interface QuoteFormProps {
  selectedService?: string;
}

const inputBase =
  "w-full rounded-xl border border-plan/25 bg-paper-light px-4 py-3 text-sm font-medium text-plan placeholder:text-plan-muted/70 transition focus:border-hivis focus:outline-none focus:ring-2 focus:ring-hivis/30";

export default function QuoteForm({ selectedService }: QuoteFormProps) {
  const [name, setName] = useState("");
  const [service, setService] = useState(serviceNames[0]);
  const [location, setLocation] = useState("");
  const [timeline, setTimeline] = useState("Immediate / This Week");
  const [details, setDetails] = useState("");

  useEffect(() => {
    if (selectedService && serviceNames.includes(selectedService)) {
      setService(selectedService);
    }
  }, [selectedService]);

  function send(e: FormEvent) {
    e.preventDefault();
    const lines = [
      `Hello *${site.name}*,`,
      ``,
      `*Client Name:* ${name}`,
      `*Service Needed:* ${service}`,
      location ? `*Location:* ${location}` : null,
      `*Timeline:* ${timeline}`,
      details ? `*Project Brief:* ${details}` : null,
    ].filter(Boolean);

    const text = lines.join("\n");
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <form
      onSubmit={send}
      className="rounded-3xl border border-paper/20 bg-paper p-6 text-plan shadow-2xl sm:p-8"
    >
      <div className="mb-6 flex items-center justify-between border-b border-plan/15 pb-4">
        <div>
          <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-hivis">
            Direct Project Dispatch
          </span>
          <h3 className="mt-1 font-display text-2xl font-extrabold text-plan">
            Request an Instant Quote
          </h3>
        </div>
        <span className="flex items-center gap-1.5 rounded-full border border-plan/20 bg-paper-light px-3 py-1 font-mono text-[11px] font-bold text-plan">
          <span className="h-2 w-2 rounded-full bg-hivis animate-pulse" />
          Live Desk
        </span>
      </div>

      <div className="space-y-4">
        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-plan">
            <User className="h-3.5 w-3.5 text-hivis" />
            <span>Your Full Name</span>
          </label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputBase}
            placeholder="e.g. Ibrahim Musa"
          />
        </div>

        <div>
          <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-plan">
            <Layers className="h-3.5 w-3.5 text-hivis" />
            <span>Select Division / Service</span>
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className={inputBase}
          >
            {serviceNames.map((s) => (
              <option key={s} value={s} className="bg-paper-light text-plan">
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-plan">
              <MapPin className="h-3.5 w-3.5 text-hivis" />
              <span>Site / Delivery Location</span>
            </label>
            <input
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={inputBase}
              placeholder="City, district or site address"
            />
          </div>

          <div>
            <label className="mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-plan">
              <Calendar className="h-3.5 w-3.5 text-hivis" />
              <span>Target Timeline</span>
            </label>
            <select
              value={timeline}
              onChange={(e) => setTimeline(e.target.value)}
              className={inputBase}
            >
              <option value="Immediate / This Week" className="bg-paper-light">
                Immediate / This Week
              </option>
              <option value="Within 2 – 4 Weeks" className="bg-paper-light">
                Within 2 – 4 Weeks
              </option>
              <option value="1 – 3 Months" className="bg-paper-light">
                1 – 3 Months
              </option>
              <option value="Budgeting & Consultation" className="bg-paper-light">
                Budgeting & Consultation
              </option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-plan">
            Scope, Quantities or Specifications
          </label>
          <textarea
            rows={4}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className={inputBase}
            placeholder="Describe your architectural plot size, material quantities, solar kVA requirement, property preference, or event date..."
          />
        </div>

        <button
          type="submit"
          className="group mt-2 flex w-full items-center justify-center gap-2.5 rounded-xl bg-hivis px-6 py-4 text-sm font-extrabold uppercase tracking-wider text-plan-deep shadow-lg shadow-hivis/30 transition hover:bg-hivis-light"
        >
          <span>Transmit Brief via WhatsApp</span>
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </button>

        <p className="text-center text-xs font-medium text-plan-muted">
          Pre-formats your project brief directly to{" "}
          <span className="font-mono font-bold text-plan">{site.phoneDisplay}</span>.
        </p>
      </div>
    </form>
  );
}
