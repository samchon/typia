import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { Tool } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController, OpenApi } from "@typia/interface";
import { registerMcpControllers } from "@typia/mcp";
import { HttpLlm } from "@typia/utils";

import { TestGlobal } from "../TestGlobal";

/**
 * Verifies that standalone-mode HTTP controller registration correctly wires
 * tools.
 *
 * Locks the `preserve: false` branch of `McpControllerRegistrar` for HTTP
 * controllers. The registrar must not touch `McpServer._registeredTools`, must
 * register `tools/list` and `tools/call` handlers on the raw `Server`, and the
 * resulting tool count must equal the controller's function count. This test
 * requires a live swagger fetch; needs a vendored fixture for fully offline
 * CI.
 *
 * 1. Fetch the shopping-backend swagger and create an `IHttpLlmController`.
 * 2. Call `registerMcpControllers` with `preserve: false`.
 * 3. Assert `_registeredTools` is empty and `_toolHandlersInitialized` is falsy.
 * 4. Call `tools/list` and assert the tool count matches the controller function
 *    count.
 */
export const test_mcp_http_controller_standalone = async (): Promise<void> => {
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

  // 3. Register with preserve: false (default)
  registerMcpControllers({
    server: mcpServer,
    controllers: [controller],
    preserve: false,
  });

  // 4. Verify private API is NOT touched in standalone mode
  const registeredTools: Record<string, unknown> =
    (mcpServer as any)._registeredTools ?? {};
  const handlersInitialized: boolean | undefined = (mcpServer as any)
    ._toolHandlersInitialized;

  TestValidator.equals(
    "_registeredTools should be empty",
    Object.keys(registeredTools).length,
    0,
  );
  TestValidator.equals(
    "_toolHandlersInitialized should be falsy",
    !!handlersInitialized,
    false,
  );

  // 5. Verify tools are registered via raw Server's request handlers
  const rawServer: Server = mcpServer.server;
  const requestHandlers: Map<string, Function> = (rawServer as any)
    ._requestHandlers;

  TestValidator.predicate(
    "tools/list handler should be registered",
    requestHandlers.has("tools/list"),
  );
  TestValidator.predicate(
    "tools/call handler should be registered",
    requestHandlers.has("tools/call"),
  );

  // 6. Call the tools/list handler to verify tools are properly listed
  const listHandler: Function = requestHandlers.get("tools/list")!;
  const result: { tools: Tool[] } = await listHandler(
    { method: "tools/list", params: {} },
    { signal: new AbortController().signal },
  );

  TestValidator.equals(
    "tools count should match controller functions",
    result.tools.length,
    controller.application.functions.length,
  );
};
