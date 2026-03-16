import { MetaRecord } from "nextra";

export default {
  application: "application() function",
  structuredOutput: "structuredOutput() function",
  parameters: "parameters() function",
  schema: "schema() function",
  http: "HttpLlm module",
  json: "LlmJson module",
  mcp: { display: "hidden" },
  vercel: { display: "hidden" },
  langchain: { display: "hidden" },
  chat: { display: "hidden" },
  strategy: { display: "hidden" },
} satisfies MetaRecord;
