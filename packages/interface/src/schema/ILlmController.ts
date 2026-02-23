import { ILlmApplication } from "./ILlmApplication";

/**
 * Controller of TypeScript class-based LLM function calling.
 *
 * `ILlmController` is a controller for registering TypeScript class methods as
 * LLM function calling tools. It contains {@link ILlmApplication} with
 * {@link ILlmFunction function calling schemas}, {@link name identifier}, and
 * {@link execute class instance} for method execution.
 *
 * You can create this controller with `typia.llm.controller<Class>()` function,
 * and register it to MCP server with {@link registerMcpControllers}:
 *
 * ```typescript
 * import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
 * import typia from "typia";
 * import { registerMcpControllers } from "@typia/mcp";
 *
 * class Calculator {
 *   add(input: { a: number; b: number }): number {
 *     return input.a + input.b;
 *   }
 *   subtract(input: { a: number; b: number }): number {
 *     return input.a - input.b;
 *   }
 * }
 *
 * const server = new McpServer({ name: "my-server", version: "1.0.0" });
 * registerMcpControllers({
 *   server,
 *   controllers: [
 *     typia.llm.controller<Calculator>(
 *       "calculator",
 *       new Calculator(),
 *     ),
 *   ],
 * });
 * ```
 *
 * For OpenAPI/HTTP-based controller, use {@link IHttpLlmController} instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Class Class type of the function executor
 */
export interface ILlmController<Class extends object = any> {
  /** Protocol discriminator. */
  protocol: "class";

  /** Identifier name of the controller. */
  name: string;

  /** Application schema of function calling. */
  application: ILlmApplication<Class>;

  /** Target class instance for function execution. */
  execute: Class;
}
