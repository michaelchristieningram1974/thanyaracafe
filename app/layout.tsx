import type { Metadata } from "next";
import "./globals.css";
import { siteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: siteSettings.name,
  description: siteSettings.tagline,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
