import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IHttpLlmController, OpenApi } from "@typia/interface";
import { registerMcpControllers } from "@typia/mcp";
import { HttpLlm } from "@typia/utils";
import { z } from "zod";

import { TestGlobal } from "../TestGlobal";

export const test_mcp_preserve_duplicate_error = async (): Promise<void> => {
  // 1. Fetch swagger.json and create controller
  const swagger: OpenApi.IDocument = await TestGlobal.getSwagger();
  const controller: IHttpLlmController = HttpLlm.controller({
    name: "shopping",
    document: swagger,
    connection: { host: "http://localhost:3000" },
  });

  // 2. Get one function name from the controller
  const firstFunctionName: string | undefined =
    controller.application.functions[0]?.name;
  if (!firstFunctionName) {
    throw new Error("Controller has no functions");
  }

  // 3. Create McpServer with tools capability
  const mcpServer: McpServer = new McpServer(
    { name: "test-server", version: "1.0.0" },
    { capabilities: { tools: {} } },
  );

  // 4. Register a tool with the same name as a controller function using zod schema
  const inputSchema: z.ZodObject<{ value: z.ZodString }> = z.object({
    value: z.string().describe("Some value"),
  });
  (mcpServer.registerTool as Function)(
    firstFunctionName,
    { description: "Conflicting tool", inputSchema },
    async (args: z.infer<typeof inputSchema>) => ({
      content: [{ type: "text", text: `conflict: ${args.value}` }],
    }),
  );

  // 5. Should throw due to duplicate name
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
