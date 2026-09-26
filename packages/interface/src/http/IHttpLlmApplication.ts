import { OpenApi } from "../openapi/OpenApi";
import { ILlmSchema } from "../schema/ILlmSchema";
import { IHttpLlmFunction } from "./IHttpLlmFunction";
import { IHttpMigrateRoute } from "./IHttpMigrateRoute";

/**
 * LLM function calling application from OpenAPI document.
 *
 * `IHttpLlmApplication` is a collection of {@link IHttpLlmFunction} schemas
 * converted from {@link OpenApi.IDocument} by `HttpLlm.application()`. Each
 * OpenAPI operation becomes an LLM-callable function.
 *
 * Successful conversions go to {@link functions}, failed ones to {@link errors}
 * with detailed error messages. Common failure causes:
 *
 * - Unsupported schema features (tuples, `oneOf` with incompatible types)
 * - Missing required fields in OpenAPI document
 * - Operations marked with `x-samchon-human: true`
 *
 * Configure behavior via {@link IHttpLlmApplication.IConfig}:
 *
 * - {@link IHttpLlmApplication.IConfig.maxLength}: Function name length limit
 * - {@link ILlmSchema.IConfig.strict}: OpenAI structured output mode
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IHttpLlmApplication {
  /** Successfully converted LLM function schemas. */
  functions: IHttpLlmFunction[];

  /** Operations that failed conversion. */
  errors: IHttpLlmApplication.IError[];

  /** Configuration used for composition. */
  config: IHttpLlmApplication.IConfig;

  /**
   * Version of the API, taken from the OpenAPI document's `info.version`.
   *
   * `undefined` when the source document carries no version info.
   */
  version?: string | undefined;
}
export namespace IHttpLlmApplication {
  /** Configuration for HTTP LLM application composition. */
  export interface IConfig extends ILlmSchema.IConfig {
    /**
     * Maximum function name length.
     *
     * A longer name drops leading accessor segments until at most `maxLength -
     * 8` characters remain, which leaves room for a counter prefix should it
     * collide. When no suffix fits, the head of the last segment is kept with a
     * hash of the full name. Every name is deterministic, unique, at most
     * `maxLength`, and does not start with a digit; a `maxLength` below 2
     * cannot hold one and throws.
     *
     * @default 64
     */
    maxLength: number;

    /**
     * Whether to disallow superfluous properties.
     *
     * @default false
     */
    equals: boolean;
  }

  /** Composition error for an operation. */
  export interface IError {
    /** HTTP method of the failed operation. */
    method: "head" | "get" | "post" | "put" | "patch" | "delete" | "query";

    /** Path of the failed operation. */
    path: string;

    /** Error messages describing the failure. */
    messages: string[];

    /** Returns source {@link OpenApi.IOperation}. */
    operation: () => OpenApi.IOperation;

    /** Returns source route. Undefined if error occurred at migration level. */
    route: () => IHttpMigrateRoute | undefined;
  }
}
