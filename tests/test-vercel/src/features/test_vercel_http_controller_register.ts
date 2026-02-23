import type { Tool } from "ai";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, OpenApi } from "@typia/interface";
import { HttpLlm } from "@typia/utils";
import { toVercelTools } from "@typia/vercel";

import { TestGlobal } from "../TestGlobal";

export const test_vercel_http_controller_register = async (): Promise<void> => {
  // 1. Fetch swagger.json and create controller
  const swagger: OpenApi.IDocument = await TestGlobal.getSwagger();
  const controller: IHttpLlmController = HttpLlm.controller({
    name: "shopping",
    document: swagger,
    connection: { host: "http://localhost:3000" },
  });

  // 2. Convert to Vercel tools
  const tools: Record<string, Tool> = toVercelTools({
    controllers: [controller],
  });

  // 3. Verify tools are registered
  const toolNames: string[] = Object.keys(tools);
  TestValidator.equals(
    "tools count should match controller functions",
    toolNames.length,
    controller.application.functions.length,
  );

  // 4. Verify all tool names start with controller prefix
  TestValidator.predicate("all tools should have shopping_ prefix", () =>
    toolNames.every((name) => name.startsWith("shopping_")),
  );

  // 5. Verify each tool has required properties
  for (const name of toolNames) {
    const tool: Tool = tools[name]!;
    TestValidator.predicate(`${name} should have description`, () =>
      tool.description !== undefined,
    );
    TestValidator.predicate(`${name} should have parameters`, () =>
      tool.parameters !== undefined,
    );
    TestValidator.predicate(`${name} should have execute`, () =>
      typeof tool.execute === "function",
    );
  }
};
