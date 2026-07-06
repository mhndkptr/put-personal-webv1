import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { HERO_CONTENT } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-[#1e2035] bg-[#0a0b14]"
    >
      {/* Subtle grid pattern overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient accent glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-indigo-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div className="animate-fade-in-up space-y-8">
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-[3.5rem]">
              {HERO_CONTENT.headline}
            </h1>

            <p className="max-w-lg text-base leading-relaxed text-zinc-400 md:text-lg">
              {HERO_CONTENT.subheadline}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                href={HERO_CONTENT.ctaPrimary.href}
                className="inline-flex items-center gap-2 rounded-full border border-[#2a2b40] bg-transparent px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
              >
                {HERO_CONTENT.ctaPrimary.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={HERO_CONTENT.ctaSecondary.href}
                className="inline-flex items-center gap-2 rounded-full border border-[#2a2b40] bg-transparent px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]"
              >
                {HERO_CONTENT.ctaSecondary.label}
                <Download className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="relative mx-auto w-full max-w-sm lg:mx-0 lg:ml-auto animate-fade-in">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-[#1e2035] shadow-2xl shadow-indigo-900/10">
              <Image
                src="/img-foto-hendika.png"
                alt="Professional portrait"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b14]/40 via-transparent to-transparent" />
            </div>
            {/* Decorative glow behind image */}
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-transparent blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
