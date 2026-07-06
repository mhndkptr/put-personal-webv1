import { CORE_TECHNOLOGIES } from "@/lib/constants";
import { TechBadge } from "@/components/ui/tech-badge";

export function TechStackSection() {
  return (
    <section className="border-b border-[#1e2035] bg-[#0a0b14]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
          Core Technologies
        </p>
        <div className="flex flex-wrap gap-3">
          {CORE_TECHNOLOGIES.map((tech) => (
            <TechBadge key={tech.name} technology={tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
