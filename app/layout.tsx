import type { Metadata } from "next";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CookieBanner from "@/components/CookieBanner";
import ScrollChrome from "@/components/ScrollChrome";
import ChatWidget from "@/components/ChatWidget";
import PageEffects from "@/components/PageEffects";

const FAVICON =
  "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'><rect width='36' height='36' rx='9' fill='%235533FF'/><text x='18' y='25' text-anchor='middle' font-family='Helvetica Neue,Arial,sans-serif' font-weight='800' font-size='18' fill='white'>B</text><circle cx='27' cy='9' r='5' fill='%23E8152A'/></svg>";

export const metadata: Metadata = {
  title: {
    default: "BIPRA — Unified Business Platform",
    template: "%s — BIPRA",
  },
  description:
    "BIPRA — Payments, billing, and enterprise workflow automation for modern African businesses. xPayments, SwiftPay, xBilling, NexCore ERP.",
  icons: { icon: [{ url: FAVICON, type: "image/svg+xml" }] },
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
    <html lang="en">
      <body>
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
