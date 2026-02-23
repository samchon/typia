import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ILlmController } from "@typia/interface";
import { registerMcpControllers } from "@typia/mcp";
import typia from "typia";
import { z } from "zod";

import { Calculator } from "../structures/Calculator";

export const test_mcp_class_controller_duplicate_error =
  async (): Promise<void> => {
    // 1. Create class-based controller using typia.llm.controller
    const controller: ILlmController<Calculator> =
      typia.llm.controller<Calculator>("calculator", new Calculator());

    // 2. Create McpServer with tools capability
    const mcpServer: McpServer = new McpServer(
      { name: "test-server", version: "1.0.0" },
      { capabilities: { tools: {} } },
    );

    // 3. Register a tool with same name as Calculator.add
    const inputSchema: z.ZodObject<{ value: z.ZodString }> = z.object({
      value: z.string().describe("Some value"),
    });
    (mcpServer.registerTool as Function)(
      "add",
      {
        description: "Conflicting tool",
        inputSchema,
      },
      async (args: z.infer<typeof inputSchema>) => ({
        content: [
          {
            type: "text",
            text: `conflict: ${args.value}`,
          },
        ],
      }),
    );

    // 4. Should throw due to duplicate name
    let threw: boolean = false;
    let errorMessage: string = "";
    try {
      registerMcpControllers({
        server: mcpServer,
        controllers: [controller],
        preserve: true,
      });
    } catch (e) {
      threw = true;
      errorMessage = (e as Error).message;
    }

    if (!threw) {
      throw new Error("Expected duplicate function name error");
    }
    if (!errorMessage.includes("Duplicate function name")) {
      throw new Error(
        `Expected error message to include "Duplicate function name", got: ${errorMessage}`,
      );
    }
  };
