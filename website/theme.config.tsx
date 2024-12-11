import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import React from "react";

const config: DocsThemeConfig = {
  logo: () => (
    <>
      <img src="/favicon/android-chrome-192x192.png" width={32} height={32} />
      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.2rem",
          paddingLeft: 15,
          paddingRight: 10,
        }}
      >
        Typia
      </span>
    </>
  ),
  nextThemes: {
    defaultTheme: "dark",
  },
  project: {
    link: "https://github.com/samchon/typia",
  },
  chat: {
    link: "https://discord.gg/E94XhzrUCZ",
  },
  docsRepositoryBase: "https://github.com/samchon/typia/blob/master/website",
  footer: {
    content: () => (
      <span>
        Released under the MIT License.
        <br />
        <br />
        Copyright 2022 - {new Date().getFullYear()}{" "}
        <a
          href="https://github.com/samchon"
          target="_blank"
          style={{ color: "initial" }}
        >
          <u>Samchon</u>
        </a>{" "}
        & Contributors
      </span>
    ),
  },
  head: () => {
    const config = useConfig();
    return (
      <>
        <title>Typia Guide Documents - {config.title}</title>
        <link rel="manifest" href="/favicon/site.webmanifest" />
        {/* ICONS */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        {[16, 32].map((size) => (
          <link
            key={size}
            rel="icon"
            type="image/png"
            sizes={`${size}x${size}`}
            href={`/favicon/favicon-${size}x${size}.png`}
          />
        ))}
        {/* OG */}
        <meta name="og:type" content="object" />
        <meta name="og:site_name" content="Typia Guide Documents" />
        <meta name="og:url" content="https://typia.io" />
        <meta name="og:image" content="/og.jpg" />
        <meta name="og:title" content="Typia Guide Documents" />
        <meta name="og:description" content="TypeScript Type Framework" />
        {/* TWITTER */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@SamchonGithub" />
        <meta name="twitter:image" content="https://typia.io/og.jpg" />
        <meta name="twitter:title" content="Typia Guide Documents" />
        <meta name="twitter:description" content="TypeScript Type Framework" />
      </>
    );
  },
};

export default config;
