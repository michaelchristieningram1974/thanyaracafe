import type { Metadata, Viewport } from "next";
import "./globals.css";
import { siteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: siteSettings.name,
  description: siteSettings.tagline,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
