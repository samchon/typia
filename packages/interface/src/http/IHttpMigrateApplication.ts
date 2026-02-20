import { OpenApi } from "../openapi/OpenApi";
import { IHttpMigrateRoute } from "./IHttpMigrateRoute";

/**
 * Migration application from OpenAPI document.
 *
 * `IHttpMigrateApplication` contains {@link IHttpMigrateRoute} list
 * converted from {@link OpenApi.IDocument} for RPC function generation.
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
