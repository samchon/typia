import { OpenApi } from "../openapi/OpenApi";

/**
 * HTTP route converted from OpenAPI operation.
 *
 * `IHttpMigrateRoute` represents a single API endpoint with all
 * request/response schemas resolved and ready for code generation. Contains
 * {@link parameters} for URL path variables, {@link query} for query strings,
 * {@link headers}, {@link cookies}, {@link body} for request payload, and
 * {@link success}/{@link exceptions} for responses.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IHttpMigrateRoute {
  /** HTTP method. */
  method: "head" | "get" | "post" | "put" | "patch" | "delete" | "query";

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

  /** Combined cookies as single object. Null if none. */
  cookies?: IHttpMigrateRoute.ICookies | null;

  /** Combined query parameters as single object. Null if none. */
  query: IHttpMigrateRoute.IQuery | null;

  /** Request body metadata. Null if none. */
  body: IHttpMigrateRoute.IBody | null;

  /** Representative success response for the declared 2xx class. */
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

    /** Effective serialization style. Defaults to `simple`. */
    style?: "matrix" | "label" | "simple";

    /** Effective explode behavior. Defaults to `false`. */
    explode?: boolean;

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

    /** Whether the combined headers argument is required. */
    required?: boolean;

    /** Source parameter serialization metadata. */
    parameters?: IHttpMigrateRoute.ISerialization[];

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

    /** Whether the combined query argument is required. */
    required?: boolean;

    /** Source parameter serialization metadata. */
    parameters?: IHttpMigrateRoute.ISerialization[];

    /** Returns title. */
    title: () => string | undefined;

    /** Returns description. */
    description: () => string | undefined;

    /** Returns example value. */
    example: () => any | undefined;

    /** Returns named examples. */
    examples: () => Record<string, any> | undefined;
  }

  /** Cookie metadata. */
  export interface ICookies extends IHeaders {}

  /** Serialization metadata for a grouped request parameter. */
  export interface ISerialization {
    /** OpenAPI parameter name sent on the wire. */
    name: string;

    /** Property key in the grouped argument, or null for an object parameter. */
    key: string | null;

    /** Object properties owned by an object parameter. */
    properties: string[] | null;

    /** Required properties owned by an object parameter. */
    requiredProperties?: string[] | null;

    /** Whether the object parameter accepts undeclared properties. */
    additionalProperties?: boolean;

    /** Effective serialization style. */
    style:
      | "form"
      | "simple"
      | "spaceDelimited"
      | "pipeDelimited"
      | "deepObject";

    /** Effective explode behavior. */
    explode: boolean;

    /** Returns source parameter definition. */
    parameter: () => OpenApi.IOperation.IParameter;
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
      | `application/${string}+json`
      | "application/x-www-form-urlencoded"
      | "multipart/form-data";

    /** Body type schema. */
    schema: OpenApi.IJsonSchema;

    /** Whether the request body is required. */
    required?: boolean;

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
