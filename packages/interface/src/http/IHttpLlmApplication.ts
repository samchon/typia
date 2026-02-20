import { OpenApi } from "../openapi/OpenApi";
import { ILlmSchema } from "../schema/ILlmSchema";
import { IHttpLlmFunction } from "./IHttpLlmFunction";
import { IHttpMigrateRoute } from "./IHttpMigrateRoute";

/**
 * LLM function calling application from OpenAPI document.
 *
 * `IHttpLlmApplication` is a collection of {@link IHttpLlmFunction} schemas
 * converted from {@link OpenApi.IDocument}. Contains successful conversions
 * in {@link functions} and failed ones in {@link errors}.
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
}
export namespace IHttpLlmApplication {
  /** Configuration for HTTP LLM application composition. */
  export interface IConfig extends ILlmSchema.IConfig {
    /**
     * Separates parameters into LLM and human parts.
     *
     * Use for file uploads or sensitive data that LLM cannot handle.
     * Return `true` for human-composed, `false` for LLM-composed.
     *
     * @default null
     */
    separate: null | ((schema: ILlmSchema) => boolean);

    /**
     * Maximum function name length. Truncated or UUID if exceeded.
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
    method: "get" | "post" | "put" | "patch" | "delete" | "head";

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
