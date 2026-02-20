import { OpenApi } from "../openapi/OpenApi";

/**
 * Route information for OpenAPI migration.
 *
 * `IHttpMigrateRoute` represents an RPC function composed from
 * {@link OpenApi.IOperation}. Used by OpenAPI generator libraries.
 */
export interface IHttpMigrateRoute {
  /** HTTP method. Operations with other methods are ignored. */
  method: "head" | "get" | "post" | "put" | "patch" | "delete";

  /** Original path from OpenAPI document. */
  path: string;

  /** Emended path with `:param` format, always starts with `/`. */
  emendedPath: string;

  /**
   * Accessor path for generated RPC function.
   *
   * Namespaces from static path segments, function name from method +
   * parameters. `delete` becomes `erase` to avoid reserved keyword.
   */
  accessor: string[];

  /** Path parameters only. */
  parameters: IHttpMigrateRoute.IParameter[];

  /** Combined headers as single object. Null if none. */
  headers: IHttpMigrateRoute.IHeaders | null;

  /** Combined query parameters as single object. Null if none. */
  query: IHttpMigrateRoute.IQuery | null;

  /** Request body metadata. Null if none. */
  body: IHttpMigrateRoute.IBody | null;

  /** Success response (200/201). Null if void return. */
  success: IHttpMigrateRoute.ISuccess | null;

  /** Exception responses keyed by status code. */
  exceptions: Record<string, IHttpMigrateRoute.IException>;

  /** Returns description comment for the RPC function. */
  comment: () => string;

  /** Returns source {@link OpenApi.IOperation}. */
  operation: () => OpenApi.IOperation;
}
export namespace IHttpMigrateRoute {
  /** Path parameter metadata. */
  export interface IParameter {
    /** Parameter name in path template. */
    name: string;

    /** Parameter variable key. */
    key: string;

    /** Parameter type schema. */
    schema: OpenApi.IJsonSchema;

    /** Returns source parameter definition. */
    parameter: () => OpenApi.IOperation.IParameter;
  }

  /** Headers metadata. */
  export interface IHeaders {
    /** Combined headers parameter name. */
    name: string;

    /** Headers variable key. */
    key: string;

    /** Combined headers schema. */
    schema: OpenApi.IJsonSchema;

    /** Returns title. */
    title: () => string | undefined;

    /** Returns description. */
    description: () => string | undefined;

    /** Returns example value. */
    example: () => any | undefined;

    /** Returns named examples. */
    examples: () => Record<string, any> | undefined;
  }

  /** Query parameters metadata. */
  export interface IQuery {
    /** Combined query parameter name. */
    name: string;

    /** Query variable key. */
    key: string;

    /** Combined query schema. */
    schema: OpenApi.IJsonSchema;

    /** Returns title. */
    title: () => string | undefined;

    /** Returns description. */
    description: () => string | undefined;

    /** Returns example value. */
    example: () => any | undefined;

    /** Returns named examples. */
    examples: () => Record<string, any> | undefined;
  }

  /** Request body metadata. */
  export interface IBody {
    /** Body parameter name. */
    name: string;

    /** Body variable key. */
    key: string;

    /** Content media type. */
    type:
      | "text/plain"
      | "application/json"
      | "application/x-www-form-urlencoded"
      | "multipart/form-data";

    /** Body type schema. */
    schema: OpenApi.IJsonSchema;

    /** Returns description. */
    description: () => string | undefined;

    /** Returns source media type definition. */
    media: () => OpenApi.IOperation.IMediaType;

    /** Nestia encryption flag. */
    "x-nestia-encrypted"?: boolean;
  }

  /** Success response metadata. */
  export interface ISuccess extends IBody {
    /** HTTP status code. */
    status: string;
  }

  /** Exception response metadata. */
  export interface IException {
    /** Exception type schema. */
    schema: OpenApi.IJsonSchema;

    /** Returns source response definition. */
    response: () => OpenApi.IOperation.IResponse;

    /** Returns source media type definition. */
    media: () => OpenApi.IOperation.IMediaType;
  }
}
