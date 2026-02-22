import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, OpenApi } from "@typia/interface";
import { registerMcpControllers } from "@typia/mcp";
import { HttpLlm } from "@typia/utils";
import { z } from "zod";

import { TestGlobal } from "../TestGlobal";

export const test_mcp_http_controller_preserve = async (): Promise<void> => {
  // 1. Fetch swagger.json and create controller
  const swagger: OpenApi.IDocument = await TestGlobal.getSwagger();
  const controller: IHttpLlmController = HttpLlm.controller({
    name: "shopping",
    document: swagger,
    connection: { host: "http://localhost:3000" },
  });

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
  const inputSchema: z.ZodObject<{
    a: z.ZodNumber;
    b: z.ZodNumber;
  }> = z.object({
    a: z.number().describe("First number"),
    b: z.number().describe("Second number"),
  });
  (mcpServer.registerTool as Function)(
    "existing_tool",
    {
      description: "An existing tool that adds two numbers",
      inputSchema,
    },
    async (args: z.infer<typeof inputSchema>) => ({
      content: [
        {
          type: "text",
          text: String(args.a + args.b),
        },
      ],
    }),
  );

  const toolsBefore: Record<string, unknown> =
    (mcpServer as any)._registeredTools ?? {};
  TestValidator.equals(
    "existing tool registered",
    Object.keys(toolsBefore).includes("existing_tool"),
    true,
  );

  // 4. Register with preserve: true
  registerMcpControllers({
    server: mcpServer,
    controllers: [controller],
    preserve: true,
  });

  // 5. Verify private API IS used in preserve mode
  const toolsAfter: Record<string, unknown> =
    (mcpServer as any)._registeredTools ?? {};
  const handlersInitialized: boolean = (mcpServer as any)
    ._toolHandlersInitialized;

  TestValidator.equals(
    "existing tool still present",
    Object.keys(toolsAfter).includes("existing_tool"),
    true,
  );
  TestValidator.equals(
    "_toolHandlersInitialized should be true",
    handlersInitialized,
    true,
  );
};
