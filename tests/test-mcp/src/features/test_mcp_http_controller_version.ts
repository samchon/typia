import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import { HttpLlm } from "@typia/utils";

import { CalculatorApi } from "../structures/CalculatorApi";

/**
 * Verifies an HTTP controller inherits the swagger `info.version` in the
 * handshake.
 *
 * An OpenAPI document is the one controller source with a natural version:
 * `HttpLlm.application()` preserves `info.version` onto
 * `IHttpLlmApplication.version`, and `createMcpServer` announces it as the MCP
 * `serverInfo.version`. A regression would pin every HTTP server to the
 * `"1.0.0"` class-controller default.
 *
 * 1. Build an HTTP controller from a document whose `info.version` is known.
 * 2. Create a server over it.
 * 3. Assert the SDK server's `serverInfo.version` matches the document.
 */
export const test_mcp_http_controller_version = async (): Promise<void> => {
  const controller: IHttpLlmController = HttpLlm.controller({
    name: "calculator",
    document: CalculatorApi.document(),
    connection: { host: "http://localhost:0" },
  });
  const server: McpServer = createMcpServer(controller);
  TestValidator.equals(
    "handshake version should mirror the document info.version",
    ((server.server as any)._serverInfo as { version: string }).version,
    CalculatorApi.VERSION,
  );
};
