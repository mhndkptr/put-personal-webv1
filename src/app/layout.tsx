import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import { QueryProvider } from "@/components/providers/query-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Put. | Software Engineer Portfolio",
    template: "%s | Put.",
  },
  description:
    "Senior Software Engineer specializing in high-performance frontend architectures and robust backend integrations. Building digital experiences that are resilient, fast, and elegantly coded.",
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Put." }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Put. | Software Engineer Portfolio",
    description:
      "Senior Software Engineer specializing in high-performance frontend architectures and robust backend integrations.",
    siteName: "Put.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} dark h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#0a0b14]">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
