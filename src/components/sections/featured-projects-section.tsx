import { SectionHeading } from "@/components/ui/section-heading";
import { ProjectCard } from "@/components/ui/project-card";
import { FEATURED_PROJECTS } from "@/lib/constants";

export function FeaturedProjectsSection() {
  return (
    <section className="border-b border-[#1e2035] bg-[#0a0b14]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <SectionHeading title="Featured Projects" className="mb-10" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
