import React from 'react'
import { DocsThemeConfig, useConfig } from 'nextra-theme-docs'

const Head = () => (
  <>
    {[
      ["android-chrome", "192x192"], 
      ["android-chrome", "512x512"], 
      ["apple-touch-icon", "180x180"], 
      ["favicon", "16x16"], 
      ["favicon", "32x32"], 
    ].map(([name, size]) => (
      <link rel={name} sizes={size} href={`/favicon/${name}-${size}.png`} />
    ))}
    <link rel="manifest" href="/favicon/site.webmanifest" />
  </>
)

const config: DocsThemeConfig = {
  head: <Head />,
  logo: () => (
    <>
      <img src="/favicon/favicon-32x32.png" />
      <span style={{ 
          fontWeight: "bold", 
          fontSize: "1.2rem",
          paddingLeft: 10,
          paddingRight: 10, }}
      >
        Typia
      </span>
      <span>Superfast Runtime Validator</span>
    </>
  ),
  project: {
    link: 'https://github.com/samchon/typia',
  },
  docsRepositoryBase: 'https://github.com/samchon/typia/tree/gh-pages',
  footer: {
    text: () => <span>
      Made by{" "}
      <a href="https://github.com/samchon" 
         target="_blank" 
         style={{ color: "blue" }}>
        <u> Samchon </u>
      </a>
    </span>
  },
  useNextSeoProps() {
    return {
      defaultTitle: "Typia Guide Documents",
      titleTemplate: "Typia Guide Documents - %s",
      additionalLinkTags: [
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/favicon/apple-touch-icon.png"
        },
        {
          rel: "manifest",
          href: "/favicon/site.webmanifest"
        },
        ...[16, 32].map(size => ({
          rel: "icon",
          type: "image/png",
          sizes: `${size}x${size}`,
          href: `/favicon/favicon-${size}x${size}.png`
        })),
      ],
      additionalMetaTags: [
        {
          property: "og:image",
          content: "/og.jpg"
        },
        {
          property: "og:type",
          content: "object"
        },
        {
          property: "og:title",
          content: "Typia Guide Documents",
        },
        {
          property: "og:description",
          content: "Superfast Runtime Validator with only one line"
        },
        {
          property: "og:site_name",
          content: "Typia Guide Documents"
        },
        {
          property: "og:url",
          content: "https://typia.io"
        },
      ]
    }
  },
}

export default config
