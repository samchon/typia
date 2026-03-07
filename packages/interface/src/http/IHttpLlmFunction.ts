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
 */
export interface IHttpLlmFunction extends ILlmFunction {
  /** HTTP method of the endpoint. */
  method: "get" | "post" | "patch" | "put" | "delete";

  /** Path of the endpoint. */
  path: string;

  /** Category tags from {@link OpenApi.IOperation.tags}. */
  tags?: string[];

  /** Returns the source {@link OpenApi.IOperation}. */
  operation: () => OpenApi.IOperation;

  /** Returns the source {@link IHttpMigrateRoute}. */
  route: () => IHttpMigrateRoute;
}
