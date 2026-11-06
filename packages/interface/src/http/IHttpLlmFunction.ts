import { OpenApi } from "../openapi/OpenApi";
import { ILlmFunction } from "../schema/ILlmFunction";
import { IHttpMigrateRoute } from "./IHttpMigrateRoute";

/**
 * LLM function calling schema from OpenAPI operation.
 *
 * Extends {@link ILlmFunction} with HTTP-specific properties. Generated from
 * {@link OpenApi.IOperation} as part of {@link IHttpLlmApplication}.
 *
 * - {@link method}, {@link path}: HTTP endpoint info
 * - {@link operation}: Source OpenAPI operation
 * - {@link route}: Source migration route
 *
 * Inherits {@link parse} and {@link validate} from {@link ILlmFunction}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation It extends the neutral LLM function with the HTTP method union, path, optional tags and accessors to the source operation and route, so one record carries what both the model and the executor need.
 * @evidence contracts/common.md#clear-and-simple-design Interface inheritance is used because every field of ILlmFunction applies unchanged.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Accessors return existing objects and nothing is cloned or patched.
 * @evidence contracts/common.md#meaningful-documentation The comment lists the added properties and which members are inherited.
 */
export interface IHttpLlmFunction extends ILlmFunction {
  /** HTTP method of the endpoint. */
  method: 
    | "head"
    | "get"
    | "post"
    | "put"
    | "patch"
    | "delete"
    | "query";

  /** Path of the endpoint. */
  path: string;

  /** Category tags from {@link OpenApi.IOperation.tags}. */
  tags?: string[];

  /**
   * Returns the source {@link OpenApi.IOperation}.
   *
   * @evidence contracts/common.md#principled-implementation A thunk returns the source OpenAPI operation instead of copying it into each function.
   * @evidence contracts/common.md#clear-and-simple-design A function-valued property matching route.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns existing data and has no side effects.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what it returns.
   */
  operation: () => OpenApi.IOperation;

  /**
   * Returns the source {@link IHttpMigrateRoute}.
   *
   * @evidence contracts/common.md#principled-implementation A thunk returns the migration route that this function was derived from, always defined for a successfully composed function.
   * @evidence contracts/common.md#clear-and-simple-design A function-valued property, matching operation.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns an existing route and creates none.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what it returns.
   */
  route: () => IHttpMigrateRoute;
}
