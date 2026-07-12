import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { ILlmController } from "@typia/interface";

import { McpControllerRegistrar } from "./internal/McpControllerRegistrar";

/** Options of {@link createMcpServer}. */
export interface IMcpServerOptions {
  /**
   * Server version for the MCP handshake.
   *
   * @default "1.0.0"
   */
  version?: string | undefined;

  /**
   * Whether to add a serialized JSON text block next to `structuredContent` in
   * every tool result.
   *
   * The MCP spec recommends the duplicate text copy as a fallback for clients
   * that ignore `outputSchema`. But it doubles the payload, and a client that
   * caps tool-result size counts both copies — so structured results ship once
   * by default, and the fallback is an opt-in.
   *
   * A result with no structured representation (a `void` method, a validation
   * failure, a runtime error) always keeps its text content.
   *
   * @default false
   */
  textFallback?: boolean | undefined;
}

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
 * @param options Optional behaviors of the server ({@link IMcpServerOptions})
 * @returns McpServer ready to connect to a transport
 */
export function createMcpServer<Class extends object = any>(
  controller: ILlmController<Class>,
  options?: IMcpServerOptions,
): McpServer {
  const instructions: string | undefined =
    controller.application.description?.trim() || undefined;
  const server: McpServer = new McpServer(
    { name: controller.name, version: options?.version ?? "1.0.0" },
    {
      capabilities: { tools: {} },
      ...(instructions !== undefined ? { instructions } : {}),
    },
  );
  McpControllerRegistrar.register(
    server.server,
    controller,
    options?.textFallback === true,
  );
  return server;
}
