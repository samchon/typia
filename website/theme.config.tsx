import { DocsThemeConfig } from "nextra-theme-docs";
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
  project: {
    link: "https://github.com/samchon/typia",
    // icon: <img
    //   alt="Typia Github repo stars"
    //   src="https://img.shields.io/github/stars/samchon/typia?style=social"
    // />
  },
  docsRepositoryBase: "https://github.com/samchon/typia/blob/master/website",
  footer: {
    text: () => (
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
  useNextSeoProps() {
    return {
      defaultTitle: "Typia Guide Documents",
      titleTemplate: "Typia Guide Documents - %s",
      additionalLinkTags: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png",
        },
        {
          rel: "manifest",
          href: "/favicon/site.webmanifest",
        },
        ...[16, 32].map((size) => ({
          rel: "icon",
          type: "image/png",
          sizes: `${size}x${size}`,
          href: `/favicon/favicon-${size}x${size}.png`,
        })),
      ],
      additionalMetaTags: [
        {
          property: "og:image",
          content: "/og.jpg",
        },
        {
          property: "og:type",
          content: "object",
        },
        {
          property: "og:title",
          content: "Typia Guide Documents",
        },
        {
          property: "og:description",
          content: "Superfast Runtime Validator with only one line",
        },
        {
          property: "og:site_name",
          content: "Typia Guide Documents",
        },
        {
          property: "og:url",
          content: "https://typia.io",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:image",
          content: "https://typia.io/og.jpg",
        },
        {
          name: "twitter:title",
          content: "Typia Guide Documents",
        },
        {
          name: "twitter:description",
          content: "Superfast Runtime Validator with only one line",
        },
        {
          name: "twitter:site",
          content: "@SamchonGithub",
        },
      ],
    };
  },
};

export default config;
