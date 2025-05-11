"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function RootClientWrapper({ children }) {
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Cette double vérification permet d'être sûr que tout est prêt côté client
  useEffect(() => {
    setMounted(true);
  }, []);

  // Reset l'état monté quand l'URL change
  useEffect(() => {
    // Ce trick force une ré-hydratation quand la navigation change
    setMounted(false);
    const timeout = setTimeout(() => {
      setMounted(true);
    }, 10);

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  // Cette technique rendant un placeholder invisible résout les différences d'hydratation
  // tout en préservant le SEO (contrairement à retourner null)
  if (!mounted) {
    return (
      <div
        aria-hidden="true"
        style={{
          visibility: "hidden",
          height: "100vh",
          width: "100vw",
          overflow: "hidden",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: -1,
        }}
      >
        {children}
      </div>
    );
  }

  return <>{children}</>;
}
