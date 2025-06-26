import { MetaRecord } from "nextra";

export default {
  index: {
    title: "Introduction",
    type: "page",
    display: "hidden",
  },
  docs: {
    title: "📖 Guide Documents",
    type: "page",
  },
  playground: {
    title: "💻 Playground",
    type: "page",
    theme: {
      layout: "full",
      footer: false,
    },
  },
} satisfies MetaRecord;
