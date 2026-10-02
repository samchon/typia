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
 * and serve it as an MCP server with `createMcpServer` from `@typia/mcp`:
 *
 * ```typescript
 * import { createMcpServer } from "@typia/mcp";
 * import typia from "typia";
 *
 * class Calculator {
 *   add(input: { a: number; b: number }): { value: number } {
 *     return { value: input.a + input.b };
 *   }
 *   subtract(input: { a: number; b: number }): { value: number } {
 *     return { value: input.a - input.b };
 *   }
 * }
 *
 * const server = createMcpServer(
 *   typia.llm.controller<Calculator>("calculator", new Calculator()),
 * );
 * ```
 *
 * For OpenAPI/HTTP-based controller, use {@link IHttpLlmController} instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @template Class Class type of the function executor
 *
 * @evidence contracts/common.md#principled-implementation The `protocol: "class"` literal discriminates it from the HTTP controller, and it pairs the application schemas with the class instance that executes the methods, typed by the same Class parameter.
 * @evidence contracts/common.md#clear-and-simple-design Four members, each with one role: discriminator, name, schemas and executor instance.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The instance is supplied by the caller, and the type does not reach into or modify the class.
 * @evidence contracts/common.md#meaningful-documentation The comment shows creation and serving through an MCP server and links the HTTP alternative.
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
