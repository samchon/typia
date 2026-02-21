import { OpenApi } from "../openapi/OpenApi";
import { ILlmSchema } from "../schema/ILlmSchema";
import { IValidation } from "../schema/IValidation";
import { IHttpMigrateRoute } from "./IHttpMigrateRoute";

/**
 * LLM function calling schema from OpenAPI operation.
 *
 * `IHttpLlmFunction` represents a single HTTP endpoint converted to LLM function
 * calling format. Generated from {@link OpenApi.IOperation} as part of
 * {@link IHttpLlmApplication}.
 *
 * Key properties:
 * - {@link name}: Function name (max 64 chars for OpenAI compatibility)
 * - {@link parameters}: Input schema with path/query/body merged
 * - {@link output}: Response schema (undefined if void)
 * - {@link description}: Critical for LLM function selection
 * - {@link validate}: Built-in argument validator for error feedback
 *
 * The {@link validate} function is essential: LLMs make frequent type errors
 * (e.g., `"123"` instead of `123`). Validate and retry improves success rate
 * from ~50% to 99%.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IHttpLlmFunction {
  /** HTTP method of the endpoint. */
  method: "get" | "post" | "patch" | "put" | "delete";

  /** Path of the endpoint. */
  path: string;

  /**
   * Function name composed from {@link IHttpMigrateRoute.accessor}.
   *
   * @maxLength 64
   */
  name: string;

  /**
   * Parameter schema.
   *
   * With keyword mode: single object with pathParameters, query, body merged.
   * Without keyword mode: array of [pathParameters..., query?, body?].
   */
  parameters: ILlmSchema.IParameters;

  /**
   * Separated parameters when {@link IHttpLlmApplication.IConfig.separate} is
   * set.
   */
  separated?: IHttpLlmFunction.ISeparated;

  /** Return type schema. Undefined if void. */
  output?: ILlmSchema | undefined;

  /** Function description for LLM context. Critical for function selection. */
  description?: string | undefined;

  /** Whether the function is deprecated. */
  deprecated?: boolean | undefined;

  /** Category tags from {@link OpenApi.IOperation.tags}. */
  tags?: string[];

  /**
   * Validates LLM-composed arguments.
   *
   * LLMs frequently make type errors. Use this to provide validation feedback
   * and retry. Success rate improves from ~50% to 99% on retry.
   */
  validate: (args: unknown) => IValidation<unknown>;

  /** Returns the source {@link OpenApi.IOperation}. */
  operation: () => OpenApi.IOperation;

  /** Returns the source {@link IHttpMigrateRoute}. */
  route: () => IHttpMigrateRoute;
}
export namespace IHttpLlmFunction {
  /** Collection of separated parameters. */
  export interface ISeparated {
    /** Parameters for LLM composition. Always at least empty object. */
    llm: ILlmSchema.IParameters;

    /** Parameters for human composition. */
    human: ILlmSchema.IParameters | null;

    /** Validates separated LLM arguments. */
    validate?: ((args: unknown) => IValidation<unknown>) | undefined;
  }
}
