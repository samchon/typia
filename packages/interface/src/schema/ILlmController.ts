import { ILlmApplication } from "./ILlmApplication";

/**
<<<<<<< HEAD
 * Controller of LLM function calling.
 *
 * `ILlmController` is a controller of LLM function calling, containing not only
 * the {@link ILlmApplication application} of
 * {@link ILlmFunction function calling schemas}, but also
 * {@link name identifier name} of the application and {@link execute executor} of
 * its TypeScript class/interface functions.
 *
 * Here is an example of using `ILlmController` type for AI agent development of
 * performing AI function calling to mobile API classes/interfaces through
 * `typia` and `@agentica`.
 *
 * ```typescript
 * import { Agentica } from "@agentica/core";
 * import typia from "typia";
 *
 * const agentica = new Agentica({
 *   model: "chatgpt",
 *   vendor: {
 *     api: new OpenAI({ apiKey: "********" }),
 *     model: "gpt-4o-mini",
 *   },
 *   controllers: [
 *     typia.llm.controller<ReactNativeFileSystem>(
 *       "filesystem",
 *       new ReactNativeFileSystem(),
 *     ),
 *     typia.llm.controller<ReactNativeGallery>(
 *       "gallery",
 *       new ReactNativeGallery(),
 *     ),
 *   ],
 * });
 * await agentica.conversate(
 *   "Organize photo collection and sort them into appropriate folders.",
 * );
 * ```
 *
 * For reference, this `ILlmController` type is designed for TypeScript
 * classes/interfaces. If you want to make a controller of another
 * {@link protocol} like HTTP or MCP, use below types instead:
 *
 * - {@link IHttpLlmController} for HTTP
 * - {@link IMcpLlmController} for MCP
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @template Class Class type of the function executor
 * @reference https://typia.io/docs/llm/controller/
 * @reference https://wrtnlabs.io/agentica/docs/core/controller/typescript/
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 */
export interface ILlmController<Class extends object = any> {
  /** Protocol discriminator. */
  protocol: "class";

  /** Identifier name of the controller. */
  name: string;

  /** Application schema of function calling. */
  application: ILlmApplication<Class>;

<<<<<<< HEAD
  /**
   * Executor of the class function.
   *
   * Executor of the class function, by target class instance.
   */
=======
  /** Target class instance for function execution. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  execute: Class;
}
