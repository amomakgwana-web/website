"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ReloadRedirect() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname === "/") return;
    const [entry] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    if (entry?.type === "reload") {
      router.replace("/");
    }
  }, [pathname, router]);

  return null;
}
