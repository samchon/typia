import { OpenApi } from "../openapi/OpenApi";
import { IHttpMigrateRoute } from "./IHttpMigrateRoute";

/**
<<<<<<< HEAD
 * Document of migration.
 *
 * The `IHttpMigrateApplication` interface is an application migrated from
 * {@link OpenApi.IDocument OpenAPI document} for supporting the OpenAPI
 * generator libraries which compose RPC (Remote Procedure Call) functions from
 * the {@link OpenApi.IOperation OpenAPI operations}.
 *
 * As the `IHttpMigrateApplication` and {@link IHttpMigrateRoute} have a lot of
 * special stories, when you're developing OpenAPI generator library, please
 * read their descriptions carefully including the description of properties.
=======
 * Migrated application from OpenAPI document.
 *
 * `IHttpMigrateApplication` converts OpenAPI operations into callable HTTP
 * routes via `HttpMigration.application()`. Unlike {@link IHttpLlmApplication}
 * which targets LLM function calling, this focuses on SDK/client code
 * generation with full HTTP semantics.
 *
 * Each {@link IHttpMigrateRoute} represents a single API endpoint with:
 *
 * - Resolved path parameters (`:id` format)
 * - Combined query/header schemas as objects
 * - Request/response body with content type
 * - Accessor path for RPC-style function naming
 *
 * Failed operations go to {@link errors} with detailed messages.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IHttpMigrateApplication {
<<<<<<< HEAD
  /** List of routes for migration. */
  routes: IHttpMigrateRoute[];

  /** List of errors occurred during the migration. */
  errors: IHttpMigrateApplication.IError[];

  /** Source OpenAPI document. */
  document: () => OpenApi.IDocument;
}
export namespace IHttpMigrateApplication {
  /** Error of migration in the operation level. */
  export interface IError {
    /** Target operation causing the error. */
    operation: () => OpenApi.IOperation;

    /**
     * Method of the operation.
     *
     * If the {@link OpenApi.IOperation.method} is not one of below type values,
     * the operation would be ignored in the migration process for the RPC
     * (Remote Procedure Call) function.
     */
    method: "head" | "get" | "post" | "put" | "patch" | "delete";

    /** Original path from the OpenAPI document. */
    path: string;

    /** List of error messages (reasons). */
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    messages: string[];
  }
}
