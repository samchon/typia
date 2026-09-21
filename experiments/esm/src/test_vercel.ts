import { toVercelTools } from "@typia/vercel";
import type { Tool } from "ai";
import typia from "typia";

import { Calculator } from "./internal/Calculator.js";
import { check } from "./internal/asserts.js";

/**
 * Verifies `@typia/vercel` converts and executes tools under Node ESM.
 *
 * `toVercelTools` imports `tool` and `jsonSchema` from `ai` at runtime — the
 * package whose named-only ESM exports originally broke the transcoded `.mjs`
 * (a `require("ai")` became a default import with no default export). The
 * `execute` round-trip proves the converted tool validates and runs.
 */
export const test_vercel = async (): Promise<void> => {
  const tools: Record<string, Tool> = toVercelTools(
    typia.llm.controller<Calculator>("calc", new Calculator()),
  );
  check(
    "controller converts to the add tool",
    JSON.stringify(Object.keys(tools)) === JSON.stringify(["add"]),
  );

  const add: Tool = tools["add"]!;
  check(
    "description reflects JSDoc",
    typeof add.description === "string" && add.description.includes("Add two"),
  );

  // AI SDK 7 requires context; AI SDK 6 ignores the extra property.
  const options = { toolCallId: "esm-e2e", messages: [], context: undefined };
  const result: unknown = await add.execute!({ x: 40, y: 2 }, options);
  check(
    "execute returns the computed value",
    JSON.stringify(result) ===
      JSON.stringify({ success: true, data: { value: 42 } }),
  );
};
