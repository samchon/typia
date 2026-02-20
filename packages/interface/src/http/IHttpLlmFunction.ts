import { OpenApi } from "../openapi/OpenApi";
import { ILlmSchema } from "../schema/ILlmSchema";
import { IValidation } from "../schema/IValidation";
import { IHttpMigrateRoute } from "./IHttpMigrateRoute";

/**
 * LLM function calling schema from OpenAPI operation.
 *
 * `IHttpLlmFunction` converts {@link OpenApi.IOperation} to LLM function
 * calling format. Contains {@link name}, {@link parameters}, {@link output},
 * and built-in {@link validate} function for argument validation.
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

  /** Separated parameters when {@link IHttpLlmApplication.IConfig.separate} is set. */
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
   * LLMs frequently make type errors. Use this to provide validation
   * feedback and retry. Success rate improves from ~50% to 99% on retry.
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
