import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { createMcpServer } from "@typia/mcp";
import typia from "typia";

import { Calculator } from "./internal/Calculator.js";
import { check } from "./internal/asserts.js";

/**
 * Verifies `@typia/mcp` builds a real MCP server under Node ESM.
 *
 * `createMcpServer` walks the reflected controller and registers each tool
 * against the `@modelcontextprotocol/sdk` — the named-only ESM package whose
 * imports broke under the previous CommonJS-transcoded `.mjs`. The full stdio
 * client/server loop lives in `experiments/mcp`; this check pins the import
 * surface and server construction.
 */
export const test_mcp = (): void => {
  const server = createMcpServer(
    typia.llm.controller<Calculator>("calc", new Calculator()),
  );
  check("createMcpServer returns an McpServer", server instanceof McpServer);
  check("server exposes connect()", typeof server.connect === "function");
};
