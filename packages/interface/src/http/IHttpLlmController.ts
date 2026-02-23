import { IHttpConnection } from "./IHttpConnection";
import { IHttpLlmApplication } from "./IHttpLlmApplication";
import { IHttpLlmFunction } from "./IHttpLlmFunction";
import { IHttpResponse } from "./IHttpResponse";

/**
 * Controller of HTTP LLM function calling.
 *
 * `IHttpLlmController` is a controller for registering OpenAPI operations as
 * LLM function calling tools. It contains {@link IHttpLlmApplication} with
 * {@link IHttpLlmFunction function calling schemas}, {@link name identifier},
 * and {@link connection} to the API server.
 *
 * You can create this controller with {@link HttpLlm.controller} function,
 * and register it to MCP server with {@link registerMcpControllers}:
 *
 * ```typescript
 * import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
 * import { HttpLlm } from "@typia/utils";
 * import { registerMcpControllers } from "@typia/mcp";
 *
 * const server = new McpServer({ name: "my-server", version: "1.0.0" });
 * registerMcpControllers({
 *   server,
 *   controllers: [
 *     HttpLlm.controller({
 *       name: "shopping",
 *       document: await fetch(
 *         "https://shopping-be.wrtn.io/editor/swagger.json",
 *       ).then((r) => r.json()),
 *       connection: {
 *         host: "https://shopping-be.wrtn.io",
 *         headers: {
 *           Authorization: "Bearer ********",
 *         },
 *       },
 *     }),
 *   ],
 * });
 * ```
 *
 * For TypeScript class-based controller, use {@link ILlmController} instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
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
