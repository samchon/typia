import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Typia, only one line magic</span>,
  project: {
    link: 'https://github.com/samchon/typia',
  },
  docsRepositoryBase: 'https://github.com/samchon/typia/tree/gh-pages',
  footer: {
    text: 'Typia Guide Documents',
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Typia",
    };
  },
}

export default config
