import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Typia, only one line magic</span>,
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
      titleTemplate: "%s – Typia",
    };
  },
}

export default config
