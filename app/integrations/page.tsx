import type { Metadata } from "next";
import IntegrationsClient from "@/components/pages/IntegrationsClient";

export const metadata: Metadata = {
  title: "Integrations",
  description: "Connect BIPRA to the accounting, CRM, communication and automation tools you already run on.",
};

export default function Page() {
  return <IntegrationsClient />;
}
