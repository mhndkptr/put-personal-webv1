import type { Technology } from "@/types";
import {
  FileCode2,
  Atom,
  Hexagon,
  Triangle,
  Database,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  "file-code-2": FileCode2,
  atom: Atom,
  hexagon: Hexagon,
  triangle: Triangle,
  database: Database,
};

interface TechBadgeProps {
  technology: Technology;
}

export function TechBadge({ technology }: TechBadgeProps) {
  const Icon = iconMap[technology.icon];

  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#1e2035] bg-[#12131f]/60 px-4 py-2 text-sm text-zinc-300 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/40 hover:text-white hover:bg-[#1a1b2e]/80">
      {Icon && <Icon className="h-4 w-4 text-indigo-400" />}
      <span>{technology.name}</span>
    </div>
  );
}
