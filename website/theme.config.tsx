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
          paddingLeft: 10,
          paddingRight: 10,
        }}
      >
        Typia
      </span>
    </>
  ),
  chat: {
    link: "mailto:samchon.github@gmail.com",
    icon: (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" id="email">
      <path fill="none" d="M0 0h24v24H0V0z"></path>
      <path
          d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25c-.25-.16-.4-.43-.4-.72 0-.67.73-1.07 1.3-.72L12 11l6.7-4.19c.57-.35 1.3.05 1.3.72 0 .29-.15.56-.4.72z"></path>
    </svg>)
  },
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
          Released under the MIT License. <br/>
          Copyright 2022 - {new Date().getFullYear()}{" "}
          <a
              href="https://github.com/samchon"
              target="_blank"
              style={{color: "initial"}}
          >
          <u>Samchon</u>
        </a>
          {" "}& Contributors
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
