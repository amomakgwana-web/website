import type { Metadata } from "next";
import ContactClient from "@/components/pages/ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to sales, book a demo, or get support from the BIPRA team.",
};

export default function Page() {
  return <ContactClient />;
}
