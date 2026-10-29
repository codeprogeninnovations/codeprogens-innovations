import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#07090E",
};

export const metadata: Metadata = {
  title: "CODEPROGENS INNOVATIONS | Enterprise Software, AI & Cloud Engineering",
  description:
    "CODEPROGENS INNOVATIONS engineers mission-critical enterprise software, agentic AI platforms, resilient cloud architectures, and modern digital products for high-growth ventures and global enterprises.",
  keywords: [
    "CODEPROGENS INNOVATIONS",
    "Software Development Company",
    "Custom Software Engineering",
    "Applied AI & Agentic Systems",
    "Cloud Native DevOps",
    "Next.js Enterprise Development",
    "Full-Stack Web & Mobile",
    "FinTech HealthTech SaaS Engineering"
  ],
  authors: [{ name: "CODEPROGENS INNOVATIONS" }],
  openGraph: {
    title: "CODEPROGENS INNOVATIONS | Enterprise Software & AI Engineering",
    description:
      "Engineering resilient cloud architectures, autonomous AI pipelines, and mission-critical enterprise software.",
    type: "website",
    locale: "en_US",
    siteName: "CODEPROGENS INNOVATIONS",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen bg-[#07090E] text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
