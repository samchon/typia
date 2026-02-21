import { ILlmApplication } from "./ILlmApplication";

/**
 * Controller of LLM function calling.
 *
 * `ILlmController` wraps an {@link ILlmApplication} with identifier and
 * executor. Contains the controller {@link name}, function calling schemas in
 * {@link application}, and the class instance in {@link execute}.
 *
 * For HTTP protocol, use `IHttpLlmController`. For MCP, use
 * `IMcpLlmController`.
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
