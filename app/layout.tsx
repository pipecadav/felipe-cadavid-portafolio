import type { Metadata, Viewport } from "next";
import "@fontsource/inter/400.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Felipe Cadavid | Software Designer & Tech Lead",
  description:
    "Portfolio and resume of Felipe Cadavid, a software engineer focused on systems design, architecture, and technical leadership.",
  keywords: [
    "Felipe Cadavid",
    "Software Designer",
    "Tech Lead",
    "Software Engineer",
    "Java",
    "Python",
    "Node.js",
  ],
  authors: [{ name: "Felipe Cadavid" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Felipe Cadavid | Software Designer & Tech Lead",
    description:
      "I design clear systems, support teams, and turn business needs into sustainable software.",
    type: "profile",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffb400",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
