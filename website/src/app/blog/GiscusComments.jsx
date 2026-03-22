"use client";

import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";

const CONFIG = {
  repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
  repoId: process.env.NEXT_PUBLIC_GISCUS_REPO_ID,
  category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
  categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
  mapping: process.env.NEXT_PUBLIC_GISCUS_MAPPING ?? "pathname",
  strict: process.env.NEXT_PUBLIC_GISCUS_STRICT ?? "0",
  reactionsEnabled: process.env.NEXT_PUBLIC_GISCUS_REACTIONS_ENABLED ?? "1",
  emitMetadata: process.env.NEXT_PUBLIC_GISCUS_EMIT_METADATA ?? "0",
  inputPosition: process.env.NEXT_PUBLIC_GISCUS_INPUT_POSITION ?? "bottom",
  lang: process.env.NEXT_PUBLIC_GISCUS_LANG ?? "en",
};

function isConfigured() {
  return Boolean(
    CONFIG.repo &&
      CONFIG.repoId &&
      CONFIG.category &&
      CONFIG.categoryId,
  );
}

export default function GiscusComments() {
  const containerRef = useRef(null);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();
  const theme = resolvedTheme === "dark" ? "dark" : "light";

  const scriptAttributes = useMemo(
    () => ({
      src: "https://giscus.app/client.js",
      "data-repo": CONFIG.repo,
      "data-repo-id": CONFIG.repoId,
      "data-category": CONFIG.category,
      "data-category-id": CONFIG.categoryId,
      "data-mapping": CONFIG.mapping,
      "data-strict": CONFIG.strict,
      "data-reactions-enabled": CONFIG.reactionsEnabled,
      "data-emit-metadata": CONFIG.emitMetadata,
      "data-input-position": CONFIG.inputPosition,
      "data-theme": theme,
      "data-lang": CONFIG.lang,
      crossorigin: "anonymous",
      async: "true",
    }),
    [theme],
  );

  useEffect(() => {
    if (!isConfigured() || !containerRef.current) return;

    containerRef.current.innerHTML = "";
    const script = document.createElement("script");
    for (const [key, value] of Object.entries(scriptAttributes)) {
      script.setAttribute(key, value);
    }
    containerRef.current.appendChild(script);
  }, [pathname, scriptAttributes]);

  useEffect(() => {
    const iframe = document.querySelector("iframe.giscus-frame");
    iframe?.contentWindow?.postMessage(
      {
        giscus: {
          setConfig: {
            theme,
          },
        },
      },
      "https://giscus.app",
    );
  }, [theme]);

  if (!isConfigured()) return null;
  return <section className="typia-blog-comments" ref={containerRef} />;
}
