import { DynamicStructuredTool } from "@langchain/core/tools";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, OpenApi } from "@typia/interface";
import { toLangChainTools } from "@typia/langchain";
import { HttpLlm } from "@typia/utils";

import { TestGlobal } from "../TestGlobal";

export const test_langchain_http_controller_standalone =
  async (): Promise<void> => {
    // 1. Fetch swagger.json and create controller
    const swagger: OpenApi.IDocument = await TestGlobal.getSwagger();
    const controller: IHttpLlmController = HttpLlm.controller({
      name: "shopping",
      document: swagger,
      connection: { host: "http://localhost:3000" },
    });

    // 2. Convert to LangChain tools
    const tools: DynamicStructuredTool[] = toLangChainTools({
      controllers: [controller],
    });

    // 3. Verify tools count matches controller functions
    TestValidator.equals(
      "tools count should match controller functions",
      tools.length,
      controller.application.functions.length,
    );

    // 4. Verify each tool has correct name prefix
    for (const func of controller.application.functions) {
      const expectedName = `shopping_${func.name}`;
      const tool = tools.find((t) => t.name === expectedName);
      TestValidator.predicate(
        `tool ${expectedName} should exist`,
        () => tool !== undefined,
      );
    }

    // 5. Verify tools have descriptions from OpenAPI
    const toolWithDescription = tools.find((t) => t.description.length > 0);
    TestValidator.predicate(
      "at least one tool should have description",
      () => toolWithDescription !== undefined,
    );
  };
