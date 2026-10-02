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
 * @evidence contracts/testing.md#behavioral-verification The reflected Calculator registration exposes tools/list and four authored method names, required add operands x/y and method description Add two numbers.
 * @evidence contracts/testing.md#independent-expectations The Calculator declaration and its authored JSDoc define names, count, required properties and description independently of generated tool metadata.
 * @evidence contracts/testing.md#distinguishing-cases The complete four-name population and add metadata are checked; dispatch and unknown-name behavior belong to sibling cases.
 * @evidence contracts/testing.md#execution-ownership test-mcp test:integration discovers test_mcp_tool_list through DynamicExecutor. The controller call is native-transformed before runtime adapter execution.
 * @evidence contracts/e2e.md#necessary-boundary The reflected Calculator registration exposes tools/list and four authored method names, required add operands x/y and method description Add two numbers. The native-produced controller is registered by createMcpServer and the actual SDK handler is invoked directly. This pins producer-to-adapter assembly, not transport serialization; private SDK handler lookup is an existing test coupling.
 * @evidence contracts/e2e.md#shared-execution All native controller call sites share the suite TypeScript project and content-keyed plugin artifact; no declaration builds its own native program. The directly invoked handlers require no separate host process or installation.
 * @evidence contracts/e2e.md#state-isolation-and-reuse-validity The case owns a fresh controller and unconnected server registry, invokes only its local handlers and opens no transport. Inputs and any fixture counter remain local, so another case cannot provide its verdict.
 * @evidence contracts/e2e.md#preserved-coverage Existing inputs, callbacks and assertions remain unchanged. The complete four-name population and add metadata are checked; dispatch and unknown-name behavior belong to sibling cases. Portable HTTP-executor handler assertions run separately in test_mcp_http_controller_execute under test:unit; no assertion is removed to shorten boundary execution.
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
