import { MetaRecord } from "nextra";

export default {
  "-- start": {
    type: "separator",
    title: "Get Started",
  },
  index: "The Idea",
  playground: "Playground",
  setup: "Setup",

  "-- cases": {
    type: "separator",
    title: "Real Cases",
  },
  "bad-request": "Bad Request",
  drift: "Drift",
  fixtures: "Fixtures",
  llm: '"42"',
  mcp: "40 Reads",
  graph: "@ttsc/graph",

  "-- wrap": {
    type: "separator",
    title: "Next",
  },
  recap: "Recap",
} satisfies MetaRecord;
