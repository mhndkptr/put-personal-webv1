import { SectionHeading } from "@/components/ui/section-heading";
import { ABOUT_PREVIEW } from "@/lib/constants";

export function AboutPreviewSection() {
  return (
    <section className="border-b border-[#1e2035] bg-[#0a0b14]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <SectionHeading title={ABOUT_PREVIEW.title} className="mb-8" />
        <div className="max-w-3xl space-y-6">
          {ABOUT_PREVIEW.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-base leading-[1.8] text-zinc-400 md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
