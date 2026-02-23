import type { Tool } from "ai";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { toVercelTools } from "@typia/vercel";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

export const test_vercel_class_controller_register = async (): Promise<void> => {
  // 1. Create class-based controller using typia.llm.controller
  const controller: ILlmController<Calculator> = typia.llm.controller<Calculator>(
    "calculator",
    new Calculator(),
  );

  // 2. Convert to Vercel tools
  const tools: Record<string, Tool> = toVercelTools({
    controllers: [controller],
  });

  // 3. Verify all tools are registered with prefix
  const toolNames: string[] = Object.keys(tools).sort();
  TestValidator.equals("should have 4 tools", toolNames.length, 4);
  TestValidator.predicate("should have calculator_add", () =>
    toolNames.includes("calculator_add"),
  );
  TestValidator.predicate("should have calculator_subtract", () =>
    toolNames.includes("calculator_subtract"),
  );
  TestValidator.predicate("should have calculator_multiply", () =>
    toolNames.includes("calculator_multiply"),
  );
  TestValidator.predicate("should have calculator_divide", () =>
    toolNames.includes("calculator_divide"),
  );

  // 4. Verify tool structure
  const addTool: Tool = tools["calculator_add"]!;
  TestValidator.predicate(
    "tool should have description",
    () => addTool.description !== undefined,
  );
  TestValidator.predicate(
    "tool should have parameters",
    () => addTool.parameters !== undefined,
  );
  TestValidator.predicate(
    "tool should have execute function",
    () => typeof addTool.execute === "function",
  );
};
