import { MetaRecord } from "nextra";

export default {
  index: "🙋🏻‍♂️ Introduction",
  setup: "📦 Setup",
  pure: "⛲ Pure TypeScript",

  "-- features": {
    type: "separator",
    title: "📖 Features",
  },
  validators: "Runtime Validators",
  json: "Enhanced JSON",
  llm: "LLM Function Calling",
  protobuf: "Protocol Buffer",
  random: "Random Generator",
  misc: "Miscellaneous",

  "-- appendix": {
    type: "separator",
    title: "🔗 Appendix",
  },
  utilization: "Utilization Cases",
  api: {
    title: "⇲ API Documents",
    href: "/api",
  },
  benchmark: {
    title: "⇲ Benchmark Result",
    href: "https://github.com/samchon/typia/tree/master/benchmark/results/AMD%20Ryzen%209%207940HS%20w%20Radeon%20780M%20Graphics",
  },
  articles: {
    title: "⇲ dev.to Articles",
    href: "https://dev.to/samchon/series/22474",
  },
} satisfies MetaRecord;

