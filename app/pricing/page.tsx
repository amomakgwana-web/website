import type { Metadata } from "next";
import PricingClient from "@/components/pages/PricingClient";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple plans that scale with your business. Every plan starts with a 14-day free trial.",
};

export default function Page() {
  return <PricingClient />;
}
