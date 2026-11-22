import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { portfolioConfig } from "@/config/portfolio.config";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${portfolioConfig.personal.name} — ${portfolioConfig.personal.title}`,
  description: portfolioConfig.personal.metaDescription,
  keywords: [
    "Dev Nijhawan",
    "AI Engineer",
    "Machine Learning Engineer",
    "Creative Developer",
    "Python",
    "FastAPI",
    "Next.js",
    "Computer Science AIML",
    "Portfolio",
  ],
  authors: [{ name: portfolioConfig.personal.name }],
  creator: portfolioConfig.personal.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devnijhawan.dev",
    title: `${portfolioConfig.personal.name} — ${portfolioConfig.personal.title}`,
    description: portfolioConfig.personal.metaDescription,
    siteName: portfolioConfig.personal.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioConfig.personal.name} — ${portfolioConfig.personal.title}`,
    description: portfolioConfig.personal.metaDescription,
    creator: "@devnijhawan",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased selection:bg-accent selection:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
