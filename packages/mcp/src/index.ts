import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IHttpLlmController, ILlmController } from "@typia/interface";

import { McpControllerRegistrar } from "./internal/McpControllerRegistrar";

/**
 * Options of {@link createMcpServer}.
 *
 * @evidence contracts/common.md#principled-implementation The optional version overrides handshake identity, and textFallback controls only the duplicate text representation of structured results; error and void text remains available.
 * @evidence contracts/common.md#clear-and-simple-design Two independent options express deployment identity and result representation, with defaults resolved by the server constructor and registrar respectively.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Neither option disables schema validation or changes controller behavior; legacy text duplication is explicit rather than inferred from a particular client.
 * @evidence contracts/common.md#meaningful-documentation Both properties describe defaults, ownership and consequences, including the payload cost and unconditional text for unstructured results.
 */
export interface IMcpServerOptions {
  /**
   * Version of the MCP server implementation announced in the handshake.
   *
   * Set this to the version of the application that assembles and deploys the
   * server. When omitted, an HTTP controller inherits its OpenAPI
   * `info.version`, while a class controller keeps the `"1.0.0"` fallback.
   *
   * @default OpenAPI info.version or "1.0.0"
   */
  version?: string | undefined;

  /**
   * Whether to add a serialized JSON text block next to `structuredContent` in
   * every tool result.
   *
   * The MCP spec recommends the duplicate text copy as a fallback for clients
   * that ignore `outputSchema`. But it doubles the payload, and a client that
   * caps tool-result size counts both copies.
   *
   * So structured results ship once by default; opt in for legacy clients.
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
 * The controller's `name` becomes the server name,
 * {@link IMcpServerOptions.version} can identify the deployed implementation,
 * and the class JSDoc (`application.description`) becomes the MCP handshake
 * instructions.
 *
 * An {@link IHttpLlmController} from `HttpLlm.controller()` works the same way:
 * every OpenAPI operation becomes an MCP tool that calls the actual endpoint,
 * and the document's `info.version` becomes the default handshake version. An
 * explicit {@link IMcpServerOptions.version} takes precedence when the MCP
 * implementation and served API have different release versions.
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
 * @param controller Controller from `typia.llm.controller<Class>()` or
 *   `HttpLlm.controller()`
 * @param options Optional behaviors of the server ({@link IMcpServerOptions})
 * @returns McpServer ready to connect to a transport
 * @evidence contracts/common.md#principled-implementation Explicit version precedes HTTP application version and the class fallback; class instructions are trimmed, and the registered controller owns schemas and execution while the caller owns transport connection.
 * @evidence contracts/common.md#clear-and-simple-design This function constructs handshake metadata and delegates tool registry and request handling to one registrar, returning the SDK server for caller-selected transport.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It creates the public MCP SDK server and installs public request handlers without transport patches or hand-authored function schemas; arguments and declared outputs stay validated by typia.
 * @evidence contracts/common.md#meaningful-documentation The API explains class and HTTP metadata, option precedence, validation feedback and transport connection with an executable-shaped example.
 */
export function createMcpServer<Class extends object = any>(
  controller: ILlmController<Class> | IHttpLlmController,
  options?: IMcpServerOptions,
): McpServer {
  const instructions: string | undefined =
    controller.protocol === "http"
      ? undefined
      : controller.application.description?.trim() || undefined;
  const version: string =
    options?.version ??
    (controller.protocol === "http"
      ? controller.application.version
      : undefined) ??
    "1.0.0";
  const server: McpServer = new McpServer(
    { name: controller.name, version },
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
