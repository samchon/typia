import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ILlmController } from "@typia/interface";

import { McpControllerRegistrar } from "./internal/McpControllerRegistrar";

/**
 * Create an MCP server over a single typia controller.
 *
 * Every method of the `controller`'s class becomes an MCP tool, with its input
 * schema, `outputSchema` / `structuredContent`, and argument validation all
 * reflected from the TypeScript types and JSDoc. No hand-written JSON schema.
 * The controller's `name` becomes the server name, and the class JSDoc
 * (`application.description`) becomes the MCP handshake instructions.
 *
 * Every tool call is validated by typia. If the LLM provides invalid arguments,
 * it receives an {@link IValidation.IFailure} formatted by
 * {@link LlmJson.stringify} so it can correct them automatically — the exact
 * feedback loop the MCP spec recommends for model self-correction. Below is an
 * example of the validation error format:
 *
 * ```json
 * {
 *   "name": "John",
 *   "age": "twenty", // ❌ [{"path":"$input.age","expected":"number & Type<\"uint32\">"}]
 *   "email": "not-an-email", // ❌ [{"path":"$input.email","expected":"string & Format<\"email\">"}]
 *   "hobbies": "reading" // ❌ [{"path":"$input.hobbies","expected":"Array<string>"}]
 * }
 * ```
 *
 * The caller connects the returned server to a transport:
 *
 * ```typescript
 * import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
 * import { createMcpServer } from "@typia/mcp";
 * import typia from "typia";
 *
 * const server = createMcpServer(
 *   typia.llm.controller<BbsService>("bbs", new BbsService()),
 * );
 * await server.connect(new StdioServerTransport());
 * ```
 *
 * @template Class Executor class type of the controller
 * @param controller Controller from `typia.llm.controller<Class>()`
 * @param version Server version for the MCP handshake
 * @returns McpServer ready to connect to a transport
 */
export function createMcpServer<Class extends object = any>(
  controller: ILlmController<Class>,
  version: string = "1.0.0",
): McpServer {
  const instructions: string | undefined =
    controller.application.description?.trim() || undefined;
  const server: McpServer = new McpServer(
    { name: controller.name, version },
    {
      capabilities: { tools: {} },
      ...(instructions !== undefined ? { instructions } : {}),
    },
  );
  McpControllerRegistrar.register(server.server, controller);
  return server;
}
