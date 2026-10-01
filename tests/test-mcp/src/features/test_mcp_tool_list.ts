import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { ILlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import { TestEquality } from "@typia/template/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification typia.llm.controller is evaluated by the native host on the types declared in this case and the result is checked by 6 assertions (tools/list handler should be registered; tool count should be 4; tool names should match; add tool should exist; add tool should have required params; add tool description comes from the method JSDoc). The case documents its purpose as: Verifies tools/list advertises one tool per class method with its schema.
 * @evidence contracts/testing.md#independent-expectations The case states its expectation basis: The controller's methods are the server's tools, named after the method, with the parameter type reflected into `inputSchema`. A regression here would drop tools from discovery or ship them with the wrong required fields, so a model could never call them correctly. Properties of the generated value that are not asserted are not certified.
 * @evidence contracts/testing.md#distinguishing-cases The assertion titles (tools/list handler should be registered; tool count should be 4; tool names should match; add tool should exist; add tool should have required params; add tool description comes from the method JSDoc) are the distinctions this case owns. Twins that are not named by those titles are either owned by sibling cases in this workspace or not asserted.
 * @evidence contracts/testing.md#execution-ownership The test-mcp start command (DynamicExecutor over src/features under ttsx with the native typia plugin) discovers this case: test_mcp_tool_list is the exported entry; the native producer is a real boundary here because the typia calls are rewritten by the native host.
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
  TestEquality.equals("tool count should be 4", result.tools.length, 4);
  TestEquality.equals(
    "tool names should match",
    toolNames,
    ["add", "divide", "multiply", "subtract"].sort(),
  );

  const addTool: Tool | undefined = result.tools.find(
    (t: Tool) => t.name === "add",
  );
  TestValidator.predicate("add tool should exist", addTool !== undefined);
  TestEquality.equals(
    "add tool should have required params",
    (addTool!.inputSchema as any).required?.sort(),
    ["x", "y"].sort(),
  );
  TestValidator.predicate(
    "add tool description comes from the method JSDoc",
    addTool!.description?.includes("Add two numbers") === true,
  );
};
