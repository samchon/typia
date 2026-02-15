import { ILlmApplication } from "./ILlmApplication";

/**
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
 */
export interface ILlmController<Class extends object = any> {
  /** Protocol discriminator. */
  protocol: "class";

  /** Identifier name of the controller. */
  name: string;

  /** Application schema of function calling. */
  application: ILlmApplication<Class>;

  /**
   * Executor of the class function.
   *
   * Executor of the class function, by target class instance.
   */
  execute: Class;
}
