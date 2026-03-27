import { MetaRecord } from "nextra";

export default {
  index: {
    title: "Introduction",
    type: "page",
    display: "hidden",
    theme: {
      copyPage: false,
      toc: false,
    },
  },
  docs: {
    title: "📖 Guide Documents",
    type: "page",
  },
  playground: {
    title: "💻 Playground",
    type: "page",
    theme: {
      copyPage: false,
      layout: "full",
      footer: false,
    },
  },
  blog: {
    display: "hidden",
  },
  "blog-articles": {
    type: "page",
    title: "📝 Blog Articles",
    href: "/blog",
  },
} satisfies MetaRecord;
