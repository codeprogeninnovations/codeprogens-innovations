import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060B18",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://codeprogens.com"),
  title: "CODEPROGEN | Innovate • Create • Grow | Enterprise Software & AI",
  description:
    "CODEPROGEN INNOVATIONS engineers mission-critical enterprise software, agentic AI platforms, resilient cloud architectures, and modern digital products. Founded by Harsh Goyal (CEO) and Vinay (CFO).",
  keywords: [
    "CODEPROGEN",
    "CODEPROGENS INNOVATIONS",
    "Harsh Goyal",
    "Vinay",
    "Innovate Create Grow",
    "Software Development Company",
    "Enterprise Software Engineering",
    "Applied AI & Agentic Systems",
    "Cloud Native DevOps",
    "Next.js Enterprise Development",
    "Full-Stack Web & Mobile"
  ],
  authors: [{ name: "CODEPROGENS INNOVATIONS" }],
  icons: {
    icon: "/company-emblem.jpg",
    apple: "/company-emblem.jpg",
  },
  openGraph: {
    title: "CODEPROGEN | INNOVATE. CREATE. GROW.",
    description:
      "Engineering resilient cloud architectures, autonomous AI pipelines, and mission-critical enterprise software.",
    type: "website",
    locale: "en_US",
    siteName: "CODEPROGEN INNOVATIONS",
    images: [
      {
        url: "/company-emblem.jpg",
        width: 616,
        height: 447,
        alt: "CODEPROGEN Innovations Official Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="min-h-screen bg-[#060B18] text-slate-100 antialiased selection:bg-pink-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
