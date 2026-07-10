import type { DynamicStructuredTool } from "@langchain/core/tools";
import { toLangChainTools } from "@typia/langchain";
import typia from "typia";

import { Calculator } from "./internal/Calculator.js";
import { check } from "./internal/asserts.js";

/**
 * Verifies `@typia/langchain` converts and executes tools under Node ESM.
 *
 * `toLangChainTools` imports `tool` from `@langchain/core/tools` at runtime —
 * one of the named-only ESM externals that the previous CommonJS-transcoded
 * `.mjs` turned into a crashing default import. The `invoke` round-trip proves
 * the converted tool actually validates and dispatches.
 */
export const test_langchain = async (): Promise<void> => {
  const tools: DynamicStructuredTool[] = toLangChainTools(
    typia.llm.controller<Calculator>("calc", new Calculator()),
  );
  check("controller converts to one tool", tools.length === 1);

  const add: DynamicStructuredTool | undefined = tools.find(
    (tool) => tool.name === "add",
  );
  if (add === undefined) throw new Error("FAIL: missing add tool");
  check("description reflects JSDoc", add.description.includes("Add two"));

  const result: unknown = await add.invoke({ x: 40, y: 2 });
  check(
    "invoke returns the computed value",
    JSON.stringify(result) ===
      JSON.stringify({ success: true, data: { value: 42 } }),
  );
};
