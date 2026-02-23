import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { registerMcpControllers } from "@typia/mcp";
import typia from "typia";
import { z } from "zod";

import { Calculator } from "../structures/Calculator";

export const test_mcp_class_controller_preserve = async (): Promise<void> => {
  // 1. Create class-based controller using typia.llm.controller
  const controller: ILlmController<Calculator> =
    typia.llm.controller<Calculator>("calculator", new Calculator());

  // 2. Create McpServer with tools capability
  const mcpServer: McpServer = new McpServer(
    {
      name: "test-server",
      version: "1.0.0",
    },
    {
      capabilities: {
        tools: {},
      },
    },
  );

  // 3. Register existing tool via McpServer.registerTool() with zod schema
  const inputSchema: z.ZodObject<{ message: z.ZodString }> = z.object({
    message: z.string().describe("Message to echo"),
  });
  (mcpServer.registerTool as Function)(
    "echo",
    {
      description: "Echo a message",
      inputSchema,
    },
    async (args: z.infer<typeof inputSchema>) => ({
      content: [
        {
          type: "text",
          text: args.message,
        },
      ],
    }),
  );

  // 4. Register with preserve: true
  registerMcpControllers({
    server: mcpServer,
    controllers: [controller],
    preserve: true,
  });

  // 5. Verify private API IS used
  const registeredTools: Record<string, unknown> =
    (mcpServer as any)._registeredTools ?? {};
  const handlersInitialized: boolean = (mcpServer as any)
    ._toolHandlersInitialized;

  TestValidator.equals(
    "existing echo tool should be present",
    Object.keys(registeredTools).includes("echo"),
    true,
  );
  TestValidator.equals(
    "_toolHandlersInitialized should be true",
    handlersInitialized,
    true,
  );

  // 6. Call tools/list to verify all tools (echo + calculator)
  const rawServer: Server = mcpServer.server;
  const requestHandlers: Map<string, Function> = (rawServer as any)
    ._requestHandlers;
  const listHandler: Function = requestHandlers.get("tools/list")!;
  const result: { tools: { name: string }[] } = await listHandler(
    {
      method: "tools/list",
      params: {},
    },
    {
      signal: new AbortController().signal,
    },
  );

  const toolNames: string[] = result.tools.map((t) => t.name).sort();

  // Should have 5 tools: echo + add, subtract, multiply, divide
  TestValidator.equals("should have 5 tools total", result.tools.length, 5);
  TestValidator.predicate(
    "should include echo tool",
    toolNames.includes("echo"),
  );
  TestValidator.predicate("should include add tool", toolNames.includes("add"));
  TestValidator.predicate(
    "should include subtract tool",
    toolNames.includes("subtract"),
  );
  TestValidator.predicate(
    "should include multiply tool",
    toolNames.includes("multiply"),
  );
  TestValidator.predicate(
    "should include divide tool",
    toolNames.includes("divide"),
  );
};
