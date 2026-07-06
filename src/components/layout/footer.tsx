import Link from "next/link";
import { Heart, Mail } from "lucide-react";
import {
  SITE_CONFIG,
  FOOTER_EXPLORE_LINKS,
  FOOTER_CONNECT_LINKS,
} from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1e2035] bg-[#0a0b14]">
      <div className="mx-auto max-w-7xl px-6 py-12 md:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="mb-4 inline-flex items-center gap-1.5 text-xl font-bold text-white"
            >
              {SITE_CONFIG.name}
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-zinc-500">
              {SITE_CONFIG.tagline}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              {FOOTER_EXPLORE_LINKS.title}
            </h3>
            <ul className="space-y-3">
              {FOOTER_EXPLORE_LINKS.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">
              {FOOTER_CONNECT_LINKS.title}
            </h3>
            <ul className="space-y-3">
              {FOOTER_CONNECT_LINKS.links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-500 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#1e2035] pt-8 sm:flex-row">
          <p className="text-xs text-zinc-600">
            © {currentYear} {SITE_CONFIG.name} All rights reserved.
          </p>
          <p className="inline-flex items-center gap-1 text-xs text-zinc-600">
            Built with <Heart className="h-3 w-3 text-red-500" /> and precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
