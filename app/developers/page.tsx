import type { Metadata } from "next";
import DevelopersClient from "@/components/pages/DevelopersClient";

export const metadata: Metadata = {
  title: "Developers",
  description: "API reference, SDKs, webhooks, and a free sandbox for building on BIPRA.",
};

export default function Page() {
  return <DevelopersClient />;
}
