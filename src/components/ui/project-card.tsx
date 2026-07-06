import type { Project } from "@/types";
import {
  BarChart3,
  Database,
  GitBranch,
  ExternalLink,
  Code2,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, LucideIcon> = {
  "bar-chart-3": BarChart3,
  database: Database,
  "git-branch": GitBranch,
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const Icon = iconMap[project.icon];

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#1e2035] bg-[#12131f] transition-all duration-500 hover:border-indigo-500/30 hover:shadow-[0_0_40px_rgba(99,102,241,0.08)]">
      {/* Icon Area */}
      <div className="flex items-center justify-between px-6 pt-6 pb-4">
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-violet-500/10 text-indigo-400 transition-all duration-300 group-hover:from-indigo-500/30 group-hover:to-violet-500/20 group-hover:text-indigo-300">
          {Icon && <Icon className="h-7 w-7" />}
        </div>
        {project.liveUrl && (
          <Link
            href={project.liveUrl}
            className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
            aria-label={`Visit ${project.title}`}
          >
            <ExternalLink className="h-4 w-4" />
          </Link>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-6 pb-6">
        <h3 className="mb-2 text-lg font-semibold text-white transition-colors group-hover:text-indigo-300">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-zinc-400">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-indigo-500/10 px-2.5 py-0.5 text-xs font-medium text-indigo-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 border-t border-[#1e2035] pt-4">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              className="flex items-center gap-1.5 text-sm font-medium text-indigo-400 transition-colors hover:text-indigo-300"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </Link>
          )}
          {project.sourceUrl && (
            <Link
              href={project.sourceUrl}
              className="flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
            >
              <Code2 className="h-3.5 w-3.5" />
              Source
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
