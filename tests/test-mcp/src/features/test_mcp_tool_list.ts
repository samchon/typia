import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Calculator } from "../structures/Calculator";

/**
 * Verifies tools/list advertises one tool per class method with its schema.
 *
 * The controller's methods are the server's tools, named after the method, with
 * the parameter type reflected into `inputSchema`. A regression here would drop
 * tools from discovery or ship them with the wrong required fields, so a model
 * could never call them correctly.
 *
 * 1. Serve a `Calculator` controller through createMcpServer.
 * 2. Call `tools/list`.
 * 3. Assert every method is listed and `add` requires its `x`/`y` params.
 */
export const test_mcp_tool_list = async (): Promise<void> => {
  const controller: ILlmController<Calculator> =
    typia.llm.controller<Calculator>("calculator", new Calculator());
  const server: McpServer = createMcpServer(controller);

  const rawServer: Server = server.server;
  const requestHandlers: Map<string, Function> = (rawServer as any)
    ._requestHandlers;
  TestValidator.predicate(
    "tools/list handler should be registered",
    requestHandlers.has("tools/list"),
  );

  const listHandler: Function = requestHandlers.get("tools/list")!;
  const result: { tools: Tool[] } = await listHandler(
    { method: "tools/list", params: {} },
    { signal: new AbortController().signal },
  );

  const toolNames: string[] = result.tools.map((t: Tool) => t.name).sort();
  TestValidator.equals("tool count should be 4", result.tools.length, 4);
  TestValidator.equals(
    "tool names should match",
    toolNames,
    ["add", "divide", "multiply", "subtract"].sort(),
  );

  const addTool: Tool | undefined = result.tools.find(
    (t: Tool) => t.name === "add",
  );
  TestValidator.predicate("add tool should exist", addTool !== undefined);
  TestValidator.equals(
    "add tool should have required params",
    (addTool!.inputSchema as any).required?.sort(),
    ["x", "y"].sort(),
  );
  TestValidator.predicate(
    "add tool description comes from the method JSDoc",
    addTool!.description?.includes("Add two numbers") === true,
  );
};
