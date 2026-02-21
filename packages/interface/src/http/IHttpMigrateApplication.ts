import { OpenApi } from "../openapi/OpenApi";
import { IHttpMigrateRoute } from "./IHttpMigrateRoute";

/**
 * Migrated application from OpenAPI document.
 *
 * `IHttpMigrateApplication` converts OpenAPI operations into callable HTTP
 * routes via `HttpMigration.application()`. Unlike {@link IHttpLlmApplication}
 * which targets LLM function calling, this focuses on SDK/client code
 * generation with full HTTP semantics.
 *
 * Each {@link IHttpMigrateRoute} represents a single API endpoint with:
 * - Resolved path parameters (`:id` format)
 * - Combined query/header schemas as objects
 * - Request/response body with content type
 * - Accessor path for RPC-style function naming
 *
 * Failed operations go to {@link errors} with detailed messages.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IHttpMigrateApplication {
  /** Successfully migrated routes. */
  routes: IHttpMigrateRoute[];

  /** Operations that failed migration. */
  errors: IHttpMigrateApplication.IError[];

  /** Returns source OpenAPI document. */
  document: () => OpenApi.IDocument;
}
export namespace IHttpMigrateApplication {
  /** Migration error for an operation. */
  export interface IError {
    /** Returns source operation. */
    operation: () => OpenApi.IOperation;

    /** HTTP method. */
    method: "head" | "get" | "post" | "put" | "patch" | "delete";

    /** Operation path. */
    path: string;

    /** Error messages. */
    messages: string[];
  }
}
