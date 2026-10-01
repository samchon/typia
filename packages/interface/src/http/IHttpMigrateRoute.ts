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
 *
 * @evidence contracts/common.md#principled-implementation A route keeps the original and emended path, an accessor name array, path parameters, nullable combined headers, cookies, query and body, one representative success and exceptions keyed by status, with accessors to the comment and source operation. Combined groups are single objects because the migrated function takes them as one argument.
 * @evidence contracts/common.md#clear-and-simple-design Nested records for each group live in the namespace, and accessors replace copies of the source data.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It is plain data produced by the composer and does not itself resolve or default anything.
 * @evidence contracts/common.md#meaningful-documentation The comment and member comments explain emended paths, accessor naming, nullability and the reserved-word rename of delete.
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

  /**
   * Returns description comment for the RPC function.
   *
   * @evidence contracts/common.md#principled-implementation A thunk renders the description comment on demand instead of storing a pre-built string.
   * @evidence contracts/common.md#clear-and-simple-design A function-valued property.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It computes from the operation and does not carry fixed text.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment says what it returns.
   */
  comment: () => string;

  /**
   * Returns source {@link OpenApi.IOperation}.
   *
   * @evidence contracts/common.md#principled-implementation A thunk returns the source operation of the route.
   * @evidence contracts/common.md#clear-and-simple-design A function-valued property that matches the other accessors.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns existing data only.
   * @evidence contracts/common.md#meaningful-documentation A one-line comment states that it returns the source operation.
   */
  operation: () => OpenApi.IOperation;
}
export namespace IHttpMigrateRoute {
  /**
   * Path parameter metadata.
   *
   * @evidence contracts/common.md#principled-implementation A path parameter has its template name and variable key, the schema and optional style and explode, whose defaults are simple and false, with an accessor to the source parameter. Style is limited to the three path styles that OpenAPI permits for path parameters.
   * @evidence contracts/common.md#clear-and-simple-design Distinct from the grouped parameters because path parameters stay individual.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Defaults are documented, not applied by the type.
   * @evidence contracts/common.md#meaningful-documentation Each field says what it holds and states defaults.
   */
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

    /**
     * Returns source parameter definition.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns the source parameter definition.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued property.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns existing data only.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states what it returns.
     */
    parameter: () => OpenApi.IOperation.IParameter;
  }

  /**
   * Headers metadata.
   *
   * @evidence contracts/common.md#principled-implementation Header parameters are combined into one object with a name, key and schema, an optional required flag, the original parameter serialization records and accessors for title, description and examples, so a client can both type the group and serialize each source parameter.
   * @evidence contracts/common.md#clear-and-simple-design Four accessors share a shape across IHeaders and IQuery and are separate members because each returns documentation that may be absent.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A record only; there is no schema merging in the type.
   * @evidence contracts/common.md#meaningful-documentation The comment names the group and each member says what it returns.
   */
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

    /**
     * Returns title.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns the title or undefined when the source declares none.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued member that avoids storing derived text.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns data from the source.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states the return.
     */
    title: () => string | undefined;

    /**
     * Returns description.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns the description or undefined.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued member with the same shape as title.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns data from the source.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states the return.
     */
    description: () => string | undefined;

    /**
     * Returns example value.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns a single example value or undefined; the `any` return reflects that examples are arbitrary JSON.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued member.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns source data.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states the return.
     */
    example: () => any | undefined;

    /**
     * Returns named examples.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns named examples or undefined.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued member.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns source data.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states the return.
     */
    examples: () => Record<string, any> | undefined;
  }

  /**
   * Query parameters metadata.
   *
   * @evidence contracts/common.md#principled-implementation Query parameters are combined into one object like headers, with an optional whole-query media record for the OpenAPI 3.2 querystring parameter, which replaces per-parameter serialization when present.
   * @evidence contracts/common.md#clear-and-simple-design It repeats the group fields of IHeaders and adds one optional querystring member.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A record only; serialization is decided by the fetcher.
   * @evidence contracts/common.md#meaningful-documentation The comment and member comments describe the combined query and the querystring option.
   */
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

    /** Whole-query media metadata for OpenAPI 3.2 `querystring`. */
    querystring?: IHttpMigrateRoute.IQuerystring;

    /**
     * Returns title.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns the title or undefined.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued member mirroring IHeaders.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns source data.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states the return.
     */
    title: () => string | undefined;

    /**
     * Returns description.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns the description or undefined.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued member mirroring IHeaders.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns source data.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states the return.
     */
    description: () => string | undefined;

    /**
     * Returns example value.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns one example or undefined.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued member mirroring IHeaders.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns source data.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states the return.
     */
    example: () => any | undefined;

    /**
     * Returns named examples.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns named examples or undefined.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued member mirroring IHeaders.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns source data.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states the return.
     */
    examples: () => Record<string, any> | undefined;
  }

  /**
   * Whole-query media metadata.
   *
   * @evidence contracts/common.md#principled-implementation A normalized media type string plus an accessor to the source media definition describe a query serialized as one value rather than as separate parameters.
   * @evidence contracts/common.md#clear-and-simple-design Two fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A record only.
   * @evidence contracts/common.md#meaningful-documentation The comment and member comments say what each field contains.
   */
  export interface IQuerystring {
    /** Normalized media type used to serialize the complete query string. */
    type: string;

    /**
     * Returns the source media type definition.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns the source media type definition of the whole query.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued member.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns source data.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states the return.
     */
    media: () => OpenApi.IOperation.IMediaType;
  }

  /**
   * Cookie metadata.
   *
   * @evidence contracts/common.md#principled-implementation Cookies reuse the IHeaders shape, since both are grouped parameters that differ only in where they are carried.
   * @evidence contracts/common.md#clear-and-simple-design An empty extension of IHeaders gives cookies a name without duplicating fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts No extra behavior is added.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment names it as cookie metadata and inherits the member documentation.
   */
  export interface ICookies extends IHeaders {}

  /**
   * Serialization metadata for a grouped request parameter.
   *
   * @evidence contracts/common.md#principled-implementation Each source parameter records its wire name, its key in the grouped argument or null for an object parameter, the properties it owns, required properties, whether extra properties are accepted, and the effective style and explode, so each source parameter can be serialized separately from the grouped argument. Styles are the closed set of OpenAPI styles for query, header and cookie.
   * @evidence contracts/common.md#clear-and-simple-design One record per source parameter, sharing a shape for headers, query and cookies.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It describes serialization and does not perform any.
   * @evidence contracts/common.md#meaningful-documentation Each field is documented including the null key case.
   */
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
      | "cookie"
      | "simple"
      | "spaceDelimited"
      | "pipeDelimited"
      | "deepObject";

    /** Effective explode behavior. */
    explode: boolean;

    /**
     * Returns source parameter definition.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns the source parameter definition.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued member.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns source data.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states the return.
     */
    parameter: () => OpenApi.IOperation.IParameter;
  }

  /**
   * Request body metadata.
   *
   * @evidence contracts/common.md#principled-implementation The body records the parameter name and key, a media type from a closed set of text, JSON, JSON-suffixed, URL-encoded and multipart types, the schema, an optional required flag, accessors to description and media, and an optional encryption flag for Nestia.
   * @evidence contracts/common.md#clear-and-simple-design Accessors keep the source data in one place and the flag is optional because most bodies are not encrypted.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A record of what the composer found; unsupported media types are not represented.
   * @evidence contracts/common.md#meaningful-documentation The comment and field comments list the media types and mark the encryption flag as Nestia specific.
   */
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

    /**
     * Returns description.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns the body description or undefined.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued member.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns source data.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states the return.
     */
    description: () => string | undefined;

    /**
     * Returns source media type definition.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns the source media type definition of the body.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued member.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns source data.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states the return.
     */
    media: () => OpenApi.IOperation.IMediaType;

    /** Nestia encryption flag. */
    "x-nestia-encrypted"?: boolean;
  }

  /**
   * Success response metadata.
   *
   * @evidence contracts/common.md#principled-implementation A success response is a body description plus an HTTP status string, which expresses the representative success status for the declared 2xx class.
   * @evidence contracts/common.md#clear-and-simple-design It extends IBody with only a status, because the response shares the body's shape.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It does not itself choose which response is representative.
   * @evidence contracts/common.md#meaningful-documentation The comment and status field describe the added status.
   */
  export interface ISuccess extends IBody {
    /** HTTP status code. */
    status: string;
  }

  /**
   * Exception response metadata.
   *
   * @evidence contracts/common.md#principled-implementation An exception response has a schema and accessors to the source response and media definitions; status is the key of the enclosing record, so it is not repeated here.
   * @evidence contracts/common.md#clear-and-simple-design Three members, with the accessors preventing copies.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A record only.
   * @evidence contracts/common.md#meaningful-documentation The comment says it is exception response metadata and each field and accessor is documented.
   */
  export interface IException {
    /** Exception type schema. */
    schema: OpenApi.IJsonSchema;

    /**
     * Returns source response definition.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns the source response definition.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued member.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns source data.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states the return.
     */
    response: () => OpenApi.IOperation.IResponse;

    /**
     * Returns source media type definition.
     *
     * @evidence contracts/common.md#principled-implementation A thunk returns the source media type definition of the response.
     * @evidence contracts/common.md#clear-and-simple-design A function-valued member.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns source data.
     * @evidence contracts/common.md#meaningful-documentation A one-line comment states the return.
     */
    media: () => OpenApi.IOperation.IMediaType;
  }
}
