import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { IHttpLlmController, ILlmController } from "@typia/interface";

import { McpControllerRegistrar } from "./internal/McpControllerRegistrar";

/**
 * Register MCP tools from controllers.
 *
 * Registers TypeScript class methods via `typia.llm.controller<Class>()` or
 * OpenAPI operations via `HttpLlm.controller()` as MCP tools.
 *
 * Every tool call is validated by typia. If LLM provides invalid arguments,
 * returns {@link IValidation.IFailure} formatted by
 * {@link stringifyValidationFailure} so that LLM can correct them automatically.
 * Below is an example of the validation error format:
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
 * If you use `McpServer.registerTool()` instead, you have to define Zod schema,
 * function name, and description string manually for each tool. Also, without
 * typia's validation feedback, LLM cannot auto-correct its mistakes, which
 * significantly degrades tool calling performance.
 *
 * @param props Registration properties
 */
export function registerMcpControllers(props: {
  /**
   * Target MCP server to register tools.
   *
   * Both {@link McpServer} and raw {@link Server} are supported. To combine with
   * `McpServer.registerTool()`, set `preserve: true`.
   */
  server: McpServer | McpServer["server"];

  /**
   * List of controllers to register as MCP tools.
   *
   * - {@link ILlmController}: from `typia.llm.controller<Class>()`, registers all
   *   methods of the class as tools
   * - {@link IHttpLlmController}: from `HttpLlm.controller()`, registers all
   *   operations from OpenAPI document as tools
   */
  controllers: Array<ILlmController | IHttpLlmController>;

  /**
   * Preserve existing tools registered via `McpServer.registerTool()`.
   *
   * If `true`, typia tools coexist with existing McpServer tools. This uses MCP
   * SDK's internal (private) API which may break on SDK updates.
   *
   * If `false`, typia tools completely replace the tool handlers, ignoring any
   * tools registered via `McpServer.registerTool()`.
   *
   * @default false
   */
  preserve?: boolean | undefined;
}): void {
  return McpControllerRegistrar.register(props);
}
