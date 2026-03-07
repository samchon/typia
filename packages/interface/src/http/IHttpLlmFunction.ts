import { OpenApi } from "../openapi/OpenApi";
import { ILlmJsonParseResult } from "../schema/ILlmJsonParseResult";
import { ILlmSchema } from "../schema/ILlmSchema";
import { IValidation } from "../schema/IValidation";
import { IHttpMigrateRoute } from "./IHttpMigrateRoute";

/**
 * LLM function calling schema from OpenAPI operation.
 *
 * `IHttpLlmFunction` represents a single HTTP endpoint converted to LLM
 * function calling format. Generated from {@link OpenApi.IOperation} as part of
 * {@link IHttpLlmApplication}.
 *
 * Key properties:
 *
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
   * Return type as an object parameters schema.
   *
   * Wraps the return type in an {@link ILlmSchema.IParameters} object with
   * `$defs` for shared type definitions and `properties` for the structured
   * output. `undefined` if the endpoint returns void.
   */
  output?: ILlmSchema.IParameters | undefined;

  /** Function description for LLM context. Critical for function selection. */
  description?: string | undefined;

  /** Whether the function is deprecated. */
  deprecated?: boolean | undefined;

  /** Category tags from {@link OpenApi.IOperation.tags}. */
  tags?: string[];

  /**
   * Lenient JSON parser with schema-based coercion.
   *
   * Parses incomplete/malformed JSON (unclosed brackets, trailing commas,
   * unclosed strings) and coerces double-stringified values using the
   * function's own {@link parameters} schema.
   *
   * This does NOT perform type validation — use {@link validate} after parsing
   * to check the result.
   *
   * @param str Raw JSON string from LLM output
   * @returns Validation result with parsed data or syntax errors
   */
  parse: (str: string) => ILlmJsonParseResult<unknown>;

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
