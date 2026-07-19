import type { Metadata } from "next";
import { Baloo_2 } from "next/font/google";
import "./globals.css";

const logoFont = Baloo_2({ subsets: ["latin"], weight: ["700", "800"], variable: "--font-logo" });
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import ScrollChrome from "@/components/ScrollChrome";
import ChatWidget from "@/components/ChatWidget";
import PageEffects from "@/components/PageEffects";
import ReloadRedirect from "@/components/ReloadRedirect";

export const metadata: Metadata = {
  title: {
    default: "BIPRA — Unified Business Platform",
    template: "%s — BIPRA",
  },
  description:
    "BIPRA — Payments, billing, and enterprise workflow automation for modern African businesses. BipraPay, VeriBills, Morr ERP.",
  openGraph: {
    title: "BIPRA — Unified Business Platform",
    description:
      "Payments, billing, and enterprise workflow automation built for Africa.",
    type: "website",
    url: "https://bipra.io",
    images: ["https://bipra.io/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIPRA — Unified Business Platform",
    description:
      "Payments, billing, and enterprise workflow automation built for Africa.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={logoFont.variable}>
      <body>
        <ReloadRedirect />
        <ScrollChrome />
        <CookieBanner />
        <SiteHeader />
        {children}
        <SiteFooter />
        <ChatWidget />
        <PageEffects />
      </body>
    </html>
  );
}
