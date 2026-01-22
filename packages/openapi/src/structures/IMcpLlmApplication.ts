import { ILlmSchema } from "./ILlmSchema";
import { IMcpLlmFunction } from "./IMcpLlmFunction";

/**
 * Application of LLM function call from MCP document.
 *
 * `IMcpLlmApplication` is an interface representing a collection of
 * {@link IMcpLlmFunction LLM function calling schemas} composed from the MCP
 * (Model Context Protocol) document. It contains
 * {@link IMcpLlmApplication.errors failed functions}, and adjusted
 * {@link IMcpLlmApplication.config options} during the `IMcpLlmApplication`
 * construction.
 *
 * About each function of MCP server, there can be {@link errors} during the
 * composition, if the function's {@link IMcpLlmFunction.parameters} type has
 * some unsupported types for the LLM function calling. In that case, the
 * function would be placed into the {@link errors} list instead of
 * {@link functions}.
 *
 * Also, each function has its own {@link IMcpLlmFunction.validate} function for
 * correcting AI agent's mistakes, and this is the reason why `@samchon/openapi`
 * recommends not to use the
 * [`mcp_servers`](https://openai.github.io/openai-agents-python/mcp/#using-mcp-servers)
 * property of LLM API directly, but to use the function calling feature
 * instead.
 *
 * @author Jeongho Nam - https://github.com/samchon
 * @author Byeongjin Oh - https://github.com/sunrabbit123
 */
export interface IMcpLlmApplication {
  /**
   * List of function metadata.
   *
   * List of function metadata that can be used for the LLM function call.
   */
  functions: IMcpLlmFunction[];

  /** List of errors occurred during the composition. */
  errors: IMcpLlmApplication.IError[];

  /** Configuration for the application. */
  config: IMcpLlmApplication.IConfig;
}
export namespace IMcpLlmApplication {
  /** Configuration for the HTTP LLM application schema composition. */
  export interface IConfig extends ILlmSchema.IConfig {
    /**
     * Maximum length of function name.
     *
     * When a function name is longer than this value, it will be truncated.
     *
     * If not possible to truncate due to the duplication, the function name
     * would be modified to randomly generated (UUID v4).
     *
     * @default 64
     */
    maxLength: number;

    /** Whether to disallow superfluous properties or not. */
    equals: boolean;
  }

  /** Error occurred in the composition. */
  export interface IError {
    /** Name of the failed function. */
    name: string;

    /** Description of the failed function. */
    description?: string | undefined;

    /** Parameters of the function. */
    parameters: object;

    /**
     * Error messages.
     *
     * The reason why the function is failed to be convert.
     */
    messages: string[];
  }
}
