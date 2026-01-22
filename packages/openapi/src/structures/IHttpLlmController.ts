import { IHttpConnection } from "./IHttpConnection";
import { IHttpLlmApplication } from "./IHttpLlmApplication";
import { IHttpLlmFunction } from "./IHttpLlmFunction";
import { IHttpResponse } from "./IHttpResponse";

/**
 * Controller of HTTP LLM function calling.
 *
 * `IHttpLlmController` is a controller of HTTP LLM function calling, containing
 * not only the {@link IHttpLlmApplication application} of
 * {@link IHttpLlmFunction function calling schemas}, but also
 * {@link name identifier name} of the application and {@link execute executor} of
 * its HTTP functions.
 *
 * Here is an example of using `IHttpLlmController` type for AI agent
 * development of performing AI function calling to e-commerce API functions
 * through `@agentica`.
 *
 * ```typescript
 * import { Agentica } from "@agentica/core";
 * import { HttpLlm, OpenApi } from "@samchon/openapi";
 *
 * const agentica = new Agentica({
 *   model: "chatgpt",
 *   vendor: {
 *     api: new OpenAI({ apiKey: "********" }),
 *     model: "gpt-4o-mini",
 *   },
 *   controllers: [
 *     {
 *       protocol: "http",
 *       name: "shopping",
 *       application: HttpLlm.application({
 *         document: await fetch(
 *           "https://shopping-be.wrtn.io/editor/swagger.json",
 *         ).then((r) => r.json()),
 *       }),
 *       connection: {
 *         host: "https://shopping-be.wrtn.io",
 *         headers: {
 *           Authorization: "Bearer ********",
 *         },
 *       },
 *     },
 *   ],
 * });
 * await agentica.conversate("I wanna buy a new phone.");
 * ```
 *
 * For reference, this `IHttpLlmController` type is designed for HTTP API
 * servers. If you want to make a controller of another {@link protocol} like MCP
 * or TypeScript, use below types instead:
 *
 * - {@link IMcpLlmController} for MCP
 * - {@link ILlmController} for TypeScript
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @reference https://wrtnlabs.io/agentica/docs/core/controller/swagger/
 */
export interface IHttpLlmController {
  /** Protocol discriminator. */
  protocol: "http";

  /** Identifier name of the controller. */
  name: string;

  /** Application schema of function calling. */
  application: IHttpLlmApplication;

  /**
   * Connection to the server.
   *
   * Connection to the API server including the URL and headers.
   */
  connection: IHttpConnection;

  /**
   * Executor of the API function.
   *
   * Default executor is {@link HttpLlm.execute} function, and you can override
   * it with your own function.
   *
   * @param props Properties of the API function call
   * @returns HTTP response of the API function call
   */
  execute?:
    | undefined
    | ((props: {
        /** Connection to the server. */
        connection: IHttpConnection;

        /** Application schema. */
        application: IHttpLlmApplication;

        /** Function schema. */
        function: IHttpLlmFunction;

        /**
         * Arguments of the function calling.
         *
         * It is an object of key-value pairs of the API function's parameters.
         * The property keys are composed by below rules:
         *
         * - Parameter names
         * - Query parameter as an object type if exists
         * - Body parameter if exists
         */
        arguments: object;
      }) => Promise<IHttpResponse>);
}
