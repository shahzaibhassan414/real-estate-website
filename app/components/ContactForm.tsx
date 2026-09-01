"use client";

import { useState } from "react";
import { waLink } from "@/app/lib/config";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const text = `Hi, I'm ${name} (${phone}). ${message}`;
    window.open(waLink(text), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="animate-fade-in-up rounded-[4px] border border-bg/20 p-8 text-center">
        <p className="font-serif text-[20px] font-semibold text-bg">Message ready.</p>
        <p className="mt-2 text-[14px] text-bg/70">
          We&apos;ve opened WhatsApp with your details just hit send.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="text-[11px] font-bold uppercase tracking-[0.08em] text-bg/55">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="mt-1 w-full rounded-[3px] border border-bg/20 bg-transparent px-4 py-3 text-[15px] text-bg placeholder:text-bg/40 transition-colors focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="phone" className="text-[11px] font-bold uppercase tracking-[0.08em] text-bg/55">
          Phone
        </label>
        <input
          id="phone"
          type="tel"
          required
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className="mt-1 w-full rounded-[3px] border border-bg/20 bg-transparent px-4 py-3 text-[15px] text-bg placeholder:text-bg/40 transition-colors focus:border-gold focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-[11px] font-bold uppercase tracking-[0.08em] text-bg/55">
          What are you looking for?
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="mt-1 w-full resize-none rounded-[3px] border border-bg/20 bg-transparent px-4 py-3 text-[15px] text-bg placeholder:text-bg/40 focus:border-gold focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="mt-2 rounded-[3px] bg-gold px-6 py-3 text-[15px] font-semibold text-ink transition hover:bg-gold/90 active:scale-[0.97]"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
