import type { Metadata } from "next";
import SolutionsClient from "@/components/pages/SolutionsClient";

export const metadata: Metadata = {
  title: "Solutions",
  description: "Industry solutions for municipalities, utilities, insurers, hospitality, and enterprise.",
};

export default function Page() {
  return <SolutionsClient />;
}
