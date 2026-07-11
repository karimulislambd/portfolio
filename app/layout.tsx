import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metaDescription =
  "AI/ML Engineer specializing in computer vision, explainable AI, and LLM systems — with four live AI apps and four research publications.";

export const metadata: Metadata = {
  metadataBase: new URL("https://karimul.vercel.app"),
  title: `${profile.name} — ${profile.role}`,
  description: metaDescription,
  openGraph: {
    title: `${profile.name} — ${profile.role}`,
    description: metaDescription,
    type: "website",
    url: "/",
    siteName: profile.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description: metaDescription,
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
