import { OpenApi } from "../openapi/OpenApi";
import { IHttpMigrateRoute } from "./IHttpMigrateRoute";

/**
 * Migrated application from OpenAPI document.
 *
 * `IHttpMigrateApplication` converts OpenAPI operations into callable HTTP
 * routes via `HttpMigration.application()`. Unlike {@link IHttpLlmApplication}
 * which targets LLM function calling, this focuses on SDK/client code
 * generation for the migration-supported HTTP operations.
 *
 * Migration considers `head`, `get`, `post`, `put`, `patch`, `delete`, and
 * `query`. Other method entries, including `options`, `trace`, and
 * `additionalOperations`, do not appear in either result list.
 *
 * Each {@link IHttpMigrateRoute} represents a single API endpoint with:
 *
 * - Resolved path parameters (`:id` format)
 * - Combined query/header schemas as objects
 * - Request/response body with content type
 * - Accessor path for RPC-style function naming
 *
 * Failed operations go to {@link errors} with detailed messages.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The composer considers its seven supported methods: head, get, post, put, patch, delete and query. Their successful conversions become routes and failed attempts become errors; other method entries are outside these lists. The accessor returns the normalized source document.
 * @evidence contracts/common.md#clear-and-simple-design Two lists and an accessor, with the error record in the namespace.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Supported-method conversion failures are retained as data; the documented method boundary does not claim to report unsupported method entries as errors.
 * @evidence contracts/common.md#meaningful-documentation The comment contrasts it with the LLM application, lists what each route carries and mentions failures.
 */
export interface IHttpMigrateApplication {
  /** Successfully migrated routes. */
  routes: IHttpMigrateRoute[];

  /** Operations that failed migration. */
  errors: IHttpMigrateApplication.IError[];

  /**
   * Returns source OpenAPI document.
   *
   * @evidence contracts/common.md#principled-implementation A thunk returns the source OpenAPI document so the application does not embed a second copy of it.
   * @evidence contracts/common.md#clear-and-simple-design A function-valued property.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns the existing document; nothing is cloned.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states what it returns.
   */
  document: () => OpenApi.IDocument;
}
export namespace IHttpMigrateApplication {
  /**
   * Migration error for an operation.
   *
   * @evidence contracts/common.md#principled-implementation A failed operation is identified by method, path and messages, with an accessor to the source operation.
   * @evidence contracts/common.md#clear-and-simple-design Four fields and no behavior.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A plain record that reports the failure instead of hiding it.
   * @evidence contracts/common.md#meaningful-documentation The comment and member comments name the operation, method, path and messages.
   */
  export interface IError {
    /**
     * Returns source operation.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns the source operation of the failed migration.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued property that mirrors the route-level accessors.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns existing data only.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states what it returns.
     */
    operation: () => OpenApi.IOperation;

    /** HTTP method. */
    method: "head" | "get" | "post" | "put" | "patch" | "delete" | "query";

    /** Operation path. */
    path: string;

    /** Error messages. */
    messages: string[];
  }
}
