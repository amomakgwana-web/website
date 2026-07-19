"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ReloadRedirect() {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Runs once per real document load: this component sits in the root
    // layout and is never remounted by client-side <Link> navigation, only
    // by an actual browser reload. Checking on every pathname change would
    // re-read the same (now stale) navigation-timing entry and bounce the
    // user home after any later in-app link click.
    if (pathname === "/") return;
    const [entry] = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[];
    if (entry?.type === "reload") {
      router.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
