import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { registerMcpControllers } from "@typia/mcp";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

export const test_mcp_class_controller_standalone = async (): Promise<void> => {
  // 1. Create class-based controller using typia.llm.controller
  const controller: ILlmController<Calculator> =
    typia.llm.controller<Calculator>("calculator", new Calculator());

  // 2. Create McpServer with tools capability
  const mcpServer: McpServer = new McpServer(
    { name: "test-server", version: "1.0.0" },
    { capabilities: { tools: {} } },
  );

  // 3. Register with preserve: false (standalone)
  registerMcpControllers({
    server: mcpServer,
    controllers: [controller],
    preserve: false,
  });

  // 4. Verify private API is NOT touched
  const registeredTools: Record<string, unknown> =
    (mcpServer as any)._registeredTools ?? {};
  TestValidator.equals(
    "_registeredTools should be empty",
    Object.keys(registeredTools).length,
    0,
  );

  // 5. Verify tools are registered via raw Server
  const rawServer: Server = mcpServer.server;
  const requestHandlers: Map<string, Function> = (rawServer as any)
    ._requestHandlers;

  TestValidator.predicate(
    "tools/list handler should be registered",
    requestHandlers.has("tools/list"),
  );

  // 6. Call tools/list and verify exact function names
  const listHandler: Function = requestHandlers.get("tools/list")!;
  const result: { tools: Tool[] } = await listHandler(
    { method: "tools/list", params: {} },
    { signal: new AbortController().signal },
  );

  const toolNames: string[] = result.tools.map((t: Tool) => t.name).sort();
  const expectedNames: string[] = [
    "add",
    "divide",
    "multiply",
    "subtract",
  ].sort();

  TestValidator.equals("tool count should be 4", result.tools.length, 4);
  TestValidator.equals("tool names should match", toolNames, expectedNames);

  // 7. Verify each tool has correct schema
  const addTool: Tool | undefined = result.tools.find(
    (t: Tool) => t.name === "add",
  );
  TestValidator.predicate("add tool should exist", addTool !== undefined);
  TestValidator.equals(
    "add tool should have required params",
    (addTool!.inputSchema as any).required?.sort(),
    ["x", "y"].sort(),
  );
};
