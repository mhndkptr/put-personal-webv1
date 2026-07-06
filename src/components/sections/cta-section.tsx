import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA_CONTENT } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="bg-[#0a0b14]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-3xl border border-[#1e2035] bg-gradient-to-b from-[#12131f] to-[#0e0f1a] px-6 py-16 text-center md:px-12 md:py-20">
          {/* Decorative gradient orbs */}
          <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-indigo-600/15 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full bg-violet-600/10 blur-[80px]" />

          <div className="relative z-10">
            <h2 className="mx-auto mb-4 max-w-lg text-2xl font-bold text-white md:text-3xl lg:text-4xl">
              {CTA_CONTENT.title}
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
              {CTA_CONTENT.description}
            </p>
            <Link
              href={CTA_CONTENT.buttonHref}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:from-indigo-500 hover:to-violet-500 hover:shadow-indigo-500/40 hover:scale-[1.02]"
            >
              {CTA_CONTENT.buttonLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
