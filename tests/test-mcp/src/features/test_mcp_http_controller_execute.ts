import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { CallToolResult, Tool } from "@modelcontextprotocol/sdk/types.js";
import { TestValidator } from "@nestia/e2e";
import { IHttpLlmController } from "@typia/interface";
import { createMcpServer } from "@typia/mcp";
import { HttpLlm } from "@typia/utils";

import { CalculatorApi } from "../structures/CalculatorApi";

/**
 * Verifies an OpenAPI operation served as an MCP tool executes end-to-end.
 *
 * `createMcpServer` accepts an `IHttpLlmController`, registering every
 * converted operation as a tool that runs through the controller's executor and
 * ships the response body as `structuredContent`. A regression would confine
 * `@typia/mcp` back to class controllers while the sibling adapters keep
 * serving OpenAPI documents.
 *
 * 1. Build an HTTP controller whose executor answers in-process (no network).
 * 2. Assert `tools/list` exposes the operation with its response `outputSchema`.
 * 3. Call it and assert the response body arrives as `structuredContent` with no
 *    text duplicate.
 */
export const test_mcp_http_controller_execute = async (): Promise<void> => {
  const controller: IHttpLlmController = HttpLlm.controller({
    name: "calculator",
    document: CalculatorApi.document(),
    connection: { host: "http://localhost:0" },
    execute: async (props) => {
      const { body } = props.arguments as { body: { x: number; y: number } };
      return {
        status: 200,
        headers: {},
        body: { value: body.x + body.y },
      };
    },
  });
  const server: McpServer = createMcpServer(controller);

  const rawServer: Server = server.server;
  const requestHandlers: Map<string, Function> = (rawServer as any)
    ._requestHandlers;

  const listHandler: Function = requestHandlers.get("tools/list")!;
  const listed: { tools: Tool[] } = await listHandler(
    { method: "tools/list", params: {} },
    { signal: new AbortController().signal },
  );
  TestValidator.equals(
    "every converted operation should be listed",
    listed.tools.map((tool: Tool) => tool.name),
    controller.application.functions.map((func) => func.name),
  );
  TestValidator.predicate(
    "the operation should advertise its response outputSchema",
    listed.tools[0]!.outputSchema !== undefined,
  );

  const callHandler: Function = requestHandlers.get("tools/call")!;
  const result: CallToolResult = await callHandler(
    {
      method: "tools/call",
      params: {
        name: controller.application.functions[0]!.name,
        arguments: { body: { x: 10, y: 5 } },
      },
    },
    { signal: new AbortController().signal },
  );
  TestValidator.predicate(
    "http tool call should not be an error",
    result.isError !== true,
  );
  TestValidator.equals(
    "response body should arrive as structuredContent",
    result.structuredContent,
    { value: 15 },
  );
  TestValidator.equals(
    "content should stay empty without the opt-in text fallback",
    result.content,
    [],
  );
};
