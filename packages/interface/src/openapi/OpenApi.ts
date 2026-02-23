import { IJsonSchemaAttribute } from "../schema/IJsonSchemaAttribute";
<<<<<<< HEAD

/**
 * Emended OpenAPI v3.1 definition used by `typia` and `nestia`.
 *
 * `OpenApi` is a namespace containing functions and interfaces for emended
 * OpenAPI v3.1 specification. The keyword "emended" means that `OpenApi` is not
 * a direct OpenAPI v3.1 specification ({@link OpenApiV3_1}), but a little bit
 * shrunk to remove ambiguous and duplicated expressions of OpenAPI v3.1 for the
 * convenience of `typia` and `nestia`.
 *
 * For example, when representing nullable type, OpenAPI v3.1 supports three
 * ways. In that case, `OpenApi` remains only the third way, so that makes
 * `typia` and `nestia` (especially `@nestia/editor`) to be simple and easy to
 * implement.
 *
 * 1. `{ type: ["string", "null"] }`
 * 2. `{ type: "string", nullable: true }`
 * 3. `{ oneOf: [{ type: "string" }, { type: "null" }] }`
 *
 * Here is the entire list of differences between OpenAPI v3.1 and emended
 * `OpenApi`.
 *
 * - Operation
 *
 *   - Merge {@link OpenApiV3_1.IPath.parameters} to
 *       {@link OpenApi.IOperation.parameters}
 *   - Resolve {@link OpenApi.IJsonSchema.IReference references} of
 *       {@link OpenApiV3_1.IOperation} members
 *   - Escape references of {@link OpenApiV3_1.IComponents.examples}
 * - JSON Schema
 *
 *   - Decompose mixed type: {@link OpenApiV3_1.IJsonSchema.IMixed}
 *   - Resolve nullable property:
 *       {@link OpenApiV3_1.IJsonSchema.__ISignificant.nullable}
 *   - Array type utilizes only single {@link OpenApi.IJsonSchema.IArray.items}
 *   - Tuple type utilizes only {@link OpenApi.IJsonSchema.ITuple.prefixItems}
 *   - Merge {@link OpenApiV3_1.IJsonSchema.IAllOf} to
 *       {@link OpenApi.IJsonSchema.IObject}
 *   - Merge {@link OpenApiV3_1.IJsonSchema.IAnyOf} to
 *       {@link OpenApi.IJsonSchema.IOneOf}
 *   - Merge {@link OpenApiV3_1.IJsonSchema.IRecursiveReference} to
 *       {@link OpenApi.IJsonSchema.IReference}
=======
import * as tags from "../tags";

/**
 * Emended OpenAPI v3.1 specification.
 *
 * `OpenApi` is a refined OpenAPI v3.1 specification that normalizes ambiguous
 * and redundant expressions from various OpenAPI versions (Swagger 2.0, OpenAPI
 * 3.0, 3.1). This unified format simplifies schema processing for `typia` and
 * `@nestia/sdk`.
 *
 * Key simplifications:
 *
 * - Schema `$ref` references are unified to `#/components/schemas/{name}` format
 * - Non-schema references (parameters, responses) are resolved inline
 * - `nullable` is converted to `{ oneOf: [schema, { type: "null\" }] }`
 * - `allOf` compositions are merged into single schemas
 * - Schema attributes are normalized across all versions
 *
 * Use `HttpLlm.application()` from `@typia/utils` to convert
 * `OpenApi.IDocument` into {@link IHttpLlmApplication} for LLM function
 * calling.
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace OpenApi {
<<<<<<< HEAD
  /** Method of the operation. */
=======
  /**
   * HTTP method supported by OpenAPI operations.
   *
   * Standard HTTP methods used in REST APIs. Each path can have multiple
   * operations, one per HTTP method.
   */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  export type Method =
    | "get"
    | "post"
    | "put"
    | "delete"
    | "options"
    | "head"
    | "patch"
    | "trace";

<<<<<<< HEAD
  /* -----------------------------------------------------------
    PATH ITEMS
  ----------------------------------------------------------- */
  /**
   * OpenAPI document.
   *
   * `OpenApi.IDocument` represents an OpenAPI document of emended OpenAPI v3.1.
   *
   * In other words, `OpenApi.IDocument` is a structure of `swagger.json` file
   * of OpenAPI v3.1 specification, but a little bit shrunk to remove ambiguous
   * and duplicated expressions of OpenAPI v3.1 for the convenience and
   * clarity.
   */
  export interface IDocument {
    /** OpenAPI version number. */
    openapi: `3.1.${number}`;

    /** List of servers that provide the API. */
    servers?: IServer[];

    /** Information about the API. */
    info?: IDocument.IInfo;

    /**
     * An object to hold reusable data structures.
     *
     * It stores both DTO schemas and security schemes.
     *
     * For reference, `nestia` defines every object and alias types as reusable
     * DTO schemas. The alias type means that defined by `type` keyword in
     * TypeScript.
     */
    components: IComponents;

    /**
     * The available paths and operations for the API.
     *
     * The 1st key is the path, and the 2nd key is the HTTP method.
     */
    paths?: Record<string, IPath>;

    /**
     * An object to hold Webhooks.
     *
     * Its structure is the same as {@link paths}, so the first key is the path,
     * and the second key is the HTTP method.
     */
    webhooks?: Record<string, IPath>;

    /**
     * A declaration of which security mechanisms can be used across the API.
     *
     * When this property is configured, it will be overwritten in every API
     * route.
     *
     * For reference, the key means the name of the security scheme and the
     * value means the `scopes`. The `scopes` can be used only when the target
     * security scheme is `oauth2` type, especially for
     * {@link ISwaggerSecurityScheme.IOAuth2.IFlow.scopes} property.
     */
    security?: Record<string, string[]>[];

    /**
     * List of tag names with descriptions.
     *
     * It is possible to omit this property or skip some tag names even if the
     * tag name is used in the API routes. In that case, the tag name will be
     * displayed (in Swagger-UI) without description.
     */
    tags?: IDocument.ITag[];

    /** Flag for indicating this document is emended by `@samchon/openapi` v4. */
    "x-samchon-emended-v4": true;
  }
  export namespace IDocument {
    /** Information about the API. */
    export interface IInfo {
      /** The title of the API. */
      title: string;

      /** A short summary of the API. */
      summary?: string;

      /** A full description of the API. */
      description?: string;

      /** A URL to the Terms of Service for the API. */
      termsOfService?: string;

      /** The contact information for the exposed API. */
      contact?: IContact;

      /** The license information for the exposed API. */
      license?: ILicense;

      /** Version of the API. */
      version: string;
    }

    /**
     * OpenAPI tag information.
     *
     * It is possible to skip composing this structure, even if some tag names
     * are registered in the API routes ({@link OpenApi.IOperation.tags}). In
     * that case, the tag name will be displayed in Swagger-UI without
     * description.
     *
     * However, if you want to describe the tag name, you can compose this
     * structure and describe the tag name in the {@link description} property.
     */
    export interface ITag {
      /** The name of the tag. */
      name: string;

      /** An optional string describing the tag. */
      description?: string;
    }

    /** Contact information for the exposed API. */
    export interface IContact {
      /** The identifying name of the contact person/organization. */
      name?: string;

      /** The URL pointing to the contact information. */
      url?: string;

      /**
       * The email address of the contact person/organization.
       *
       * @format email
       */
      email?: string;
    }

    /** License information for the exposed API. */
    export interface ILicense {
      /** The license name used for the API. */
      name: string;

      /**
       * Identifier for the license used for the API.
       *
       * Example: MIT
       */
      identifier?: string;

      /** A URL to the license used for the API. */
=======
  /**
   * Root document structure for emended OpenAPI v3.1.
   *
   * Contains all API metadata, paths, operations, and reusable components. The
   * `x-samchon-emended-v4` marker indicates this document has been processed by
   * `@samchon/openapi` to normalize schema formats.
   */
  export interface IDocument {
    /** OpenAPI version. */
    openapi: `3.1.${number}`;

    /** List of servers providing the API. */
    servers?: IServer[];

    /** API metadata. */
    info?: IDocument.IInfo;

    /** Reusable components (schemas, security schemes). */
    components: IComponents;

    /** Available API paths and operations. */
    paths?: Record<string, IPath>;

    /** Webhook definitions. */
    webhooks?: Record<string, IPath>;

    /** Global security requirements. */
    security?: Record<string, string[]>[];

    /** Tag definitions for grouping operations. */
    tags?: IDocument.ITag[];

    /** Marker for emended document by `@samchon/openapi`. */
    "x-samchon-emended-v4": true;
  }
  export namespace IDocument {
    /**
     * API metadata and identification.
     *
     * Contains essential information about the API including title, version,
     * contact information, and licensing details.
     */
    export interface IInfo {
      /** API title. */
      title: string;

      /** Short summary. */
      summary?: string;

      /** Full description. */
      description?: string;

      /** Terms of service URL. */
      termsOfService?: string;

      /** Contact information. */
      contact?: IContact;

      /** License information. */
      license?: ILicense;

      /** API version. */
      version: string;
    }

    /** Tag for grouping operations. */
    export interface ITag {
      /** Tag name. */
      name: string;

      /** Tag description. */
      description?: string;
    }

    /** Contact information. */
    export interface IContact {
      /** Contact name. */
      name?: string;

      /** Contact URL. */
      url?: string;

      /** Contact email. */
      email?: string & tags.Format<"email">;
    }

    /** License information. */
    export interface ILicense {
      /** License name. */
      name: string;

      /** SPDX license identifier. */
      identifier?: string;

      /** License URL. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
      url?: string;
    }
  }

<<<<<<< HEAD
  /** The remote server that provides the API. */
  export interface IServer {
    /** A URL to the target host. */
    url: string;

    /** An optional string describing the target server. */
    description?: string;

    /**
     * A map between a variable name and its value.
     *
     * When the server {@link url} is a template type, this property will be
     * utilized to fill the template with actual values.
     */
    variables?: Record<string, IServer.IVariable>;
  }
  export namespace IServer {
    /** A variable for the server URL template. */
    export interface IVariable {
      /** Default value to use for substitution. */
      default: string;

      /** List of available values for the variable. */
      enum?: string[];

      /** An optional description for the server variable. */
=======
  /** Server providing the API. */
  export interface IServer {
    /** Server URL. */
    url: string;

    /** Server description. */
    description?: string;

    /** URL template variables. */
    variables?: Record<string, IServer.IVariable>;
  }
  export namespace IServer {
    /** URL template variable. */
    export interface IVariable {
      /** Default value. */
      default: string;

      /** Allowed values. */
      enum?: string[];

      /** Variable description. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
      description?: string;
    }
  }

<<<<<<< HEAD
  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  /**
   * Path item.
   *
   * `OpenApi.IPath` represents a path item of emended OpenAPI v3.1, collecting
   * multiple method operations under a single path.
   */
  export interface IPath extends Partial<Record<Method, IOperation>> {
    /** Servers that provide the path operations. */
    servers?: IServer[];

    /** Summary of the path. */
    summary?: string;

    /** Description of the path. */
    description?: string;
  }

  /**
   * Remote operation information.
   *
   * `OpenApi.IOperation` represents a RESTful API operation provided by the
   * remote server.
   */
  export interface IOperation {
    /** Unique string used to identify the operation. */
    operationId?: string;

    /** List of parameters that are applicable for this operation. */
    parameters?: IOperation.IParameter[];

    /** The request body applicable for this operation. */
    requestBody?: IOperation.IRequestBody;

    /**
     * The list of possible responses as they are returned from executing this
     * operation. Its key is the HTTP status code, and the value is the metadata
     * of the response in the HTTP status code.
     */
    responses?: Record<string, IOperation.IResponse>;

    /** A list of servers providing this API operation. */
    servers?: IServer[];

    /** A short summary of what the operation does. */
    summary?: string;

    /** A verbose explanation of the operation behavior. */
    description?: string;

    /**
     * List of securities and their scopes that are required for execution.
     *
     * When this property is configured, the RESTful API operation requires the
     * matching security value for execution. Its key means the security key
     * matching {@link OpenApi.IDocument.security}.
     *
     * The value means scopes required for the security key when the security
     * type is {@link OpenApi.ISecurityScheme.IOAuth2}. Otherwise, if the target
     * security type is not {@link OpenApi.ISecurityScheme.IOAuth2}, the value
     * will be an empty array.
     */
    security?: Record<string, string[]>[];

    /** Tags for API documentation control. */
    tags?: string[];

    /** Flag for indicating this operation is deprecated. */
    deprecated?: boolean;

    /**
     * Flag for indicating this operation is human-only.
     *
     * If this property value is `true`, the {@link HttpLlm.application} function
     * will not convert this operation schema into the LLM function calling
     * schema that is represented by the {@link IHttpLlmFunction} interface.
     */
    "x-samchon-human"?: boolean;

    /**
     * Accessor of the operation.
     *
     * If you configure this property, the assigned value will be used as
     * {@link IHttpMigrateRoute.accessor}. Also, it can be used as the
     * {@link IHttpLlmFunction.name} by joining with `.` character in the LLM
     * function calling application.
     *
     * Note that the `x-samchon-accessor` value must be unique in the entire
     * OpenAPI document operations. If there are duplicated `x-samchon-accessor`
     * values, {@link IHttpMigrateRoute.accessor} will ignore all duplicated
     * `x-samchon-accessor` values and generate the
     * {@link IHttpMigrateRoute.accessor} by itself.
     */
    "x-samchon-accessor"?: string[];

    /**
     * Controller of the operation.
     *
     * If you configure this property, the assigned value will be utilized as
     * the controller name in the OpenAPI generator library like
     * [`@nestia/editor`](https://nestia.io/docs/editor/) and
     * [`@nestia/migrate`](https://nestia.io/docs/migrate/).
     *
     * Also, if {@link x-samchon-accessor} has been configured, its last element
     * will be used as the controller method (function) name. Of course, the
     * OpenAPI document generator `@nestia/sdk` fills both of them.
     */
    "x-samchon-controller"?: string;
  }
  export namespace IOperation {
    /** Parameter of the operation. */
    export interface IParameter {
      /**
       * Representative name of the parameter.
       *
       * In most cases, the `name` is equivalent to the parameter variable name.
       * Therefore, the `name` must be filled with the significant variable name
       * of the parameter.
       *
       * Note: Only when the {@link in} property is `path`, the `name` can be
       * omitted. In that case, the `name` is automatically deduced from the URL
       * path's positional template argument analysis.
       */
      name?: string;

      /**
       * Location of the parameter.
       *
       * The `in` property is a string that determines the location of the
       * parameter.
       *
       * - `path`: parameter is part of the path of the URL.
       * - `query`: parameter is part of the query string.
       * - `header`: parameter is part of the header.
       * - `cookie`: parameter is part of the cookie.
       */
      in: "path" | "query" | "header" | "cookie";

      /** Type info of the parameter. */
      schema: IJsonSchema;

      /**
       * Whether the parameter is required for execution or not.
       *
       * If the parameter is required, the value must be filled. Otherwise, it
       * is possible to skip the parameter when executing the API operation.
       *
       * For reference, the `required` property must always be `true` when the
       * {@link in} property is `path`. Otherwise, the `required` property can be
       * any of these values: `true`, `false`, or `undefined`.
       */
      required?: boolean;

      /** Verbose explanation of the parameter. */
      description?: string;

      /** Example value of the parameter. */
      example?: any;

      /** Collection of example values of the parameter with keys. */
      examples?: Record<string, IExample>;
    }

    /** Request body of the operation. */
    export interface IRequestBody {
      content?: IContent;
      description?: string;
      required?: boolean;
      "x-nestia-encrypted"?: boolean;
    }

    /** Response of the operation. */
    export interface IResponse {
      headers?: Record<string, IOperation.IParameter>;
      content?: IContent;
      description?: string;
      "x-nestia-encrypted"?: boolean;
    }

    /** List of content types supported in request/response body. */
=======
  /** Path item containing operations by HTTP method. */
  export interface IPath extends Partial<Record<Method, IOperation>> {
    /** Path-level servers. */
    servers?: IServer[];

    /** Path summary. */
    summary?: string;

    /** Path description. */
    description?: string;
  }

  /** API operation metadata. */
  export interface IOperation {
    /** Unique operation identifier. */
    operationId?: string;

    /** Operation parameters. */
    parameters?: IOperation.IParameter[];

    /** Request body. */
    requestBody?: IOperation.IRequestBody;

    /** Response definitions by status code. */
    responses?: Record<string, IOperation.IResponse>;

    /** Operation-level servers. */
    servers?: IServer[];

    /** Short summary. */
    summary?: string;

    /** Full description. */
    description?: string;

    /** Security requirements. */
    security?: Record<string, string[]>[];

    /** Operation tags for grouping. */
    tags?: string[];

    /** Whether deprecated. */
    deprecated?: boolean;

    /** Excludes from LLM function calling when `true`. */
    "x-samchon-human"?: boolean;

    /** Custom accessor path for migration. */
    "x-samchon-accessor"?: string[];

    /** Controller name for code generation. */
    "x-samchon-controller"?: string;
  }
  export namespace IOperation {
    /** Operation parameter. */
    export interface IParameter {
      /** Parameter name. */
      name?: string;

      /** Parameter location. */
      in: "path" | "query" | "header" | "cookie";

      /** Parameter schema. */
      schema: IJsonSchema;

      /** Whether required. */
      required?: boolean;

      /** Parameter description. */
      description?: string;

      /** Example value. */
      example?: any;

      /** Named examples. */
      examples?: Record<string, IExample>;
    }

    /** Request body. */
    export interface IRequestBody {
      /** Body content by media type. */
      content?: IContent;

      /** Body description. */
      description?: string;

      /** Whether required. */
      required?: boolean;

      /** Nestia encryption flag. */
      "x-nestia-encrypted"?: boolean;
    }

    /** Response definition. */
    export interface IResponse {
      /** Response headers. */
      headers?: Record<string, IOperation.IParameter>;

      /** Response content by media type. */
      content?: IContent;

      /** Response description. */
      description?: string;

      /** Nestia encryption flag. */
      "x-nestia-encrypted"?: boolean;
    }

    /** Content by media type. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    export interface IContent extends Partial<
      Record<ContentType, IMediaType>
    > {}

<<<<<<< HEAD
    /** Media type of a request/response body. */
    export interface IMediaType {
      schema?: IJsonSchema;
      example?: any;
      examples?: Record<string, IExample>;
    }

    /** List of supported content media types. */
=======
    /** Media type definition. */
    export interface IMediaType {
      /** Content schema. */
      schema?: IJsonSchema;

      /** Example value. */
      example?: any;

      /** Named examples. */
      examples?: Record<string, IExample>;
    }

    /** Supported content types. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    export type ContentType =
      | "text/plain"
      | "application/json"
      | "application/x-www-form-url-encoded"
      | "multipart/form-data"
      | "*/*"
      | (string & {});
  }

<<<<<<< HEAD
  /** Example of the operation parameter or response. */
  export interface IExample {
    summary?: string;
    description?: string;
    value?: any;
    externalValue?: string;
  }

  /* -----------------------------------------------------------
    SCHEMA DEFINITIONS
  ----------------------------------------------------------- */
  /**
   * Reusable components in OpenAPI.
   *
   * A storage of reusable components in OpenAPI document.
   *
   * In other words, it is a storage of named DTO schemas and security schemes.
   */
  export interface IComponents {
    /**
     * An object to hold reusable DTO schemas.
     *
     * In other words, a collection of named JSON schemas.
     */
    schemas?: Record<string, IJsonSchema>;

    /**
     * An object to hold reusable security schemes.
     *
     * In other words, a collection of named security schemes.
     */
=======
  /** Example value definition. */
  export interface IExample {
    /** Example summary. */
    summary?: string;

    /** Example description. */
    description?: string;

    /** Example value. */
    value?: any;

    /** External value URL. */
    externalValue?: string;
  }

  /** Reusable components storage. */
  export interface IComponents {
    /** Named schemas. */
    schemas?: Record<string, IJsonSchema>;

    /** Named security schemes. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    securitySchemes?: Record<string, ISecurityScheme>;
  }

  /**
<<<<<<< HEAD
   * Type schema information.
   *
   * `OpenApi.IJsonSchema` is a type schema info for OpenAPI.
   *
   * `OpenApi.IJsonSchema` basically follows the JSON schema definition of
   * OpenAPI v3.1, but is refined to remove ambiguous and duplicated expressions
   * of OpenAPI v3.1 for convenience and clarity.
   *
   * - Decompose mixed type: {@link OpenApiV3_1.IJsonSchema.IMixed}
   * - Resolve nullable property:
   *   {@link OpenApiV3_1.IJsonSchema.__ISignificant.nullable}
   * - Array type utilizes only single {@link OpenApi.IJsonSchema.IArray.items}
   * - Tuple type utilizes only {@link OpenApi.IJsonSchema.ITuple.prefixItems}
   * - Merge {@link OpenApiV3_1.IJsonSchema.IAllOf} to
   *   {@link OpenApi.IJsonSchema.IObject}
   * - Merge {@link OpenApiV3_1.IJsonSchema.IAnyOf} to
   *   {@link OpenApi.IJsonSchema.IOneOf}
   * - Merge {@link OpenApiV3_1.IJsonSchema.IRecursiveReference} to
   *   {@link OpenApi.IJsonSchema.IReference}
=======
   * JSON Schema type for emended OpenAPI v3.1.
   *
   * Represents all possible JSON Schema types in the normalized OpenAPI format.
   * This is a discriminated union - check the `type` property or use type
   * guards to narrow to specific schema types.
   *
   * Unlike raw JSON Schema, this format:
   *
   * - Uses `oneOf` instead of `anyOf` for union types
   * - Separates `IArray` (homogeneous) from `ITuple` (heterogeneous)
   * - Normalizes nullable types to `oneOf` with null schema
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
   */
  export type IJsonSchema =
    | IJsonSchema.IConstant
    | IJsonSchema.IBoolean
    | IJsonSchema.IInteger
    | IJsonSchema.INumber
    | IJsonSchema.IString
    | IJsonSchema.IArray
    | IJsonSchema.ITuple
    | IJsonSchema.IObject
    | IJsonSchema.IReference
    | IJsonSchema.IOneOf
    | IJsonSchema.INull
    | IJsonSchema.IUnknown;
  export namespace IJsonSchema {
    /** Constant value type. */
    export interface IConstant extends IJsonSchemaAttribute {
<<<<<<< HEAD
      /** The constant value. */
      const: boolean | number | string;
    }

    /** Boolean type info. */
    export interface IBoolean extends IJsonSchemaAttribute.IBoolean {
      /** The default value of the boolean type. */
      default?: boolean;
    }

    /** Integer type info. */
    export interface IInteger extends IJsonSchemaAttribute.IInteger {
      /**
       * Default value of the integer type.
       *
       * @type int64
       */
      default?: number;

      /**
       * Minimum value restriction.
       *
       * @type int64
       */
      minimum?: number;

      /**
       * Maximum value restriction.
       *
       * @type int64
       */
      maximum?: number;

      /** Exclusive minimum value restriction. */
      exclusiveMinimum?: number;

      /** Exclusive maximum value restriction. */
      exclusiveMaximum?: number;

      /**
       * Multiple of value restriction.
       *
       * @type uint64
       * @exclusiveMinimum 0
       */
      multipleOf?: number;
    }

    /** Number (double) type info. */
    export interface INumber extends IJsonSchemaAttribute.INumber {
      /** Default value of the number type. */
      default?: number;

      /** Minimum value restriction. */
      minimum?: number;

      /** Maximum value restriction. */
      maximum?: number;

      /** Exclusive minimum value restriction. */
      exclusiveMinimum?: number;

      /** Exclusive maximum value restriction. */
      exclusiveMaximum?: number;

      /**
       * Multiple of value restriction.
       *
       * @exclusiveMinimum 0
       */
      multipleOf?: number;
    }

    /** String type info. */
    export interface IString extends IJsonSchemaAttribute.IString {
      /** Default value of the string type. */
      default?: string;

      /** Format restriction. */
=======
      /** Constant value. */
      const: boolean | number | string;
    }

    /** Boolean type. */
    export interface IBoolean extends IJsonSchemaAttribute.IBoolean {
      /** Default value. */
      default?: boolean;
    }

    /** Integer type. */
    export interface IInteger extends IJsonSchemaAttribute.IInteger {
      /** Default value. */
      default?: number & tags.Type<"int64">;

      /** Minimum value. */
      minimum?: number & tags.Type<"int64">;

      /** Maximum value. */
      maximum?: number & tags.Type<"int64">;

      /** Exclusive minimum. */
      exclusiveMinimum?: number & tags.Type<"int64">;

      /** Exclusive maximum. */
      exclusiveMaximum?: number & tags.Type<"int64">;

      /** Multiple of constraint. */
      multipleOf?: number & tags.ExclusiveMinimum<0>;
    }

    /** Number (double) type. */
    export interface INumber extends IJsonSchemaAttribute.INumber {
      /** Default value. */
      default?: number;

      /** Minimum value. */
      minimum?: number;

      /** Maximum value. */
      maximum?: number;

      /** Exclusive minimum. */
      exclusiveMinimum?: number;

      /** Exclusive maximum. */
      exclusiveMaximum?: number;

      /** Multiple of constraint. */
      multipleOf?: number & tags.ExclusiveMinimum<0>;
    }

    /** String type. */
    export interface IString extends IJsonSchemaAttribute.IString {
      /** Default value. */
      default?: string;

      /** String format. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
      format?:
        | "binary"
        | "byte"
        | "password"
        | "regex"
        | "uuid"
        | "email"
        | "hostname"
        | "idn-email"
        | "idn-hostname"
        | "iri"
        | "iri-reference"
        | "ipv4"
        | "ipv6"
        | "uri"
        | "uri-reference"
        | "uri-template"
        | "url"
        | "date-time"
        | "date"
        | "time"
        | "duration"
        | "json-pointer"
        | "relative-json-pointer"
        | (string & {});

<<<<<<< HEAD
      /** Pattern restriction. */
      pattern?: string;

      /** Content media type restriction. */
      contentMediaType?: string;

      /**
       * Minimum length restriction.
       *
       * @type uint64
       */
      minLength?: number;

      /**
       * Maximum length restriction.
       *
       * @type uint64
       */
      maxLength?: number;
    }

    /** Array type info. */
    export interface IArray extends IJsonSchemaAttribute.IArray {
      /**
       * Items type info.
       *
       * The `items` means the type of the array elements. In other words, it is
       * the type schema info of the `T` in the TypeScript array type
       * `Array<T>`.
       */
      items: IJsonSchema;

      /**
       * Unique items restriction.
       *
       * If this property value is `true`, target array must have unique items.
       */
      uniqueItems?: boolean;

      /**
       * Minimum items restriction.
       *
       * Restriction of minimum number of items in the array.
       *
       * @type uint64
       */
      minItems?: number;

      /**
       * Maximum items restriction.
       *
       * Restriction of maximum number of items in the array.
       *
       * @type uint64
       */
      maxItems?: number;
    }

    /** Tuple type info. */
    export interface ITuple extends IJsonSchemaAttribute {
      /**
       * Discriminator value of the type.
       *
       * Note that, the tuple type cannot be distinguished with {@link IArray}
       * type just by this `discriminator` property.
       *
       * To check whether the type is tuple or array, you have to check the
       * existence of {@link IArray.items} or {@link ITuple.prefixItems}
       * properties.
       */
      type: "array";

      /**
       * Prefix items.
       *
       * The `prefixItems` means the type schema info of the prefix items in the
       * tuple type. In the TypeScript, it is expressed as `[T1, T2]`.
       *
       * If you want to express `[T1, T2, ...TO[]]` type, you can configure the
       * `...TO[]` through the {@link additionalItems} property.
       */
      prefixItems: IJsonSchema[];

      /**
       * Additional items.
       *
       * The `additionalItems` means the type schema info of the additional
       * items after the {@link prefixItems}. In the TypeScript, if there's a
       * type `[T1, T2, ...TO[]]`, the `...TO[]` is represented by the
       * `additionalItems`.
       *
       * By the way, if you configure the `additionalItems` as `true`, it means
       * the additional items are not restricted. They can be any type, so that
       * it is equivalent to the TypeScript type `[T1, T2, ...any[]]`.
       *
       * Otherwise configure the `additionalItems` as the {@link IJsonSchema}, it
       * means the additional items must follow the type schema info. Therefore,
       * it is equivalent to the TypeScript type `[T1, T2, ...TO[]]`.
       */
      additionalItems?: boolean | IJsonSchema;

      /**
       * Unique items restriction.
       *
       * If this property value is `true`, target tuple must have unique items.
       */
      uniqueItems?: boolean;

      /**
       * Minimum items restriction.
       *
       * Restriction of minimum number of items in the tuple.
       *
       * @type uint64
       */
      minItems?: number;

      /**
       * Maximum items restriction.
       *
       * Restriction of maximum number of items in the tuple.
       *
       * @type uint64
       */
      maxItems?: number;
    }

    /** Object type info. */
    export interface IObject extends IJsonSchemaAttribute.IObject {
      /**
       * Properties of the object.
       *
       * The `properties` means a list of key-value pairs of the object's
       * regular properties. The key is the name of the regular property, and
       * the value is the type schema info.
       *
       * If you need additional properties that is represented by dynamic key,
       * you can use the {@link additionalProperties} instead.
       */
      properties?: Record<string, IJsonSchema>;

      /**
       * Additional properties' info.
       *
       * The `additionalProperties` means the type schema info of the additional
       * properties that are not listed in the {@link properties}.
       *
       * If the value is `true`, it means that the additional properties are not
       * restricted. They can be any type. Otherwise, if the value is
       * {@link IJsonSchema} type, it means that the additional properties must
       * follow the type schema info.
       *
       * - `true`: `Record<string, any>`
       * - `IJsonSchema`: `Record<string, T>`
       */
      additionalProperties?: boolean | IJsonSchema;

      /**
       * List of key values of the required properties.
       *
       * The `required` means a list of the key values of the required
       * {@link properties}. If some property key is not listed in the `required`
       * list, it means that property is optional. Otherwise some property key
       * exists in the `required` list, it means that the property must be
       * filled.
       *
       * Below is an example of the {@link properties} and `required`.
       *
       * ```typescript
       * interface SomeObject {
       *   id: string;
       *   email: string;
       *   name?: string;
       * }
       * ```
       *
       * As you can see, `id` and `email` {@link properties} are {@link required},
       * so that they are listed in the `required` list.
       *
       * ```json
       * {
       *   "type": "object",
       *   "properties": {
       *     "id": { "type": "string" },
       *     "email": { "type": "string" },
       *     "name": { "type": "string" }
       *   },
       *   "required": ["id", "email"]
       * }
       * ```
       */
      required?: string[];
    }

    /** Reference type directing named schema. */
    export interface IReference<Key = string> extends IJsonSchemaAttribute {
      /**
       * Reference to the named schema.
       *
       * The `ref` is a reference to the named schema. Format of the `$ref` is
       * following the JSON Pointer specification. In the OpenAPI, the `$ref`
       * starts with `#/components/schemas/` which means the type is stored in
       * the {@link OpenApi.IComponents.schemas} object.
       *
       * - `#/components/schemas/SomeObject`
       * - `#/components/schemas/AnotherObject`
       */
      $ref: Key;
    }

    /**
     * Union type.
     *
     * `IOneOf` represents an union type of the TypeScript (`A | B | C`).
     *
     * For reference, even though your Swagger (or OpenAPI) document has defined
     * `anyOf` instead of the `oneOf`, {@link OpenApi} forcibly converts it to
     * `oneOf` type.
     */
    export interface IOneOf extends IJsonSchemaAttribute {
      /** List of the union types. */
      oneOf: Exclude<IJsonSchema, IJsonSchema.IOneOf>[];

      /** Discriminator info of the union type. */
      discriminator?: IOneOf.IDiscriminator;
    }
    export namespace IOneOf {
      /** Discriminator info of the union type. */
      export interface IDiscriminator {
        /** Property name for the discriminator. */
        propertyName: string;

        /**
         * Mapping of the discriminator value to the schema name.
         *
         * This property is valid only for {@link IReference} typed
         * {@link IOneOf.oneof} elements. Therefore, `key` of `mapping` is the
         * discriminator value, and `value` of `mapping` is the schema name like
         * `#/components/schemas/SomeObject`.
         */
=======
      /** Regex pattern. */
      pattern?: string;

      /** Content media type. */
      contentMediaType?: string;

      /** Minimum length. */
      minLength?: number & tags.Type<"uint64">;

      /** Maximum length. */
      maxLength?: number & tags.Type<"uint64">;
    }

    /** Array type. */
    export interface IArray extends IJsonSchemaAttribute.IArray {
      /** Element type. */
      items: IJsonSchema;

      /** Whether elements must be unique. */
      uniqueItems?: boolean;

      /** Minimum items. */
      minItems?: number & tags.Type<"uint64">;

      /** Maximum items. */
      maxItems?: number & tags.Type<"uint64">;
    }

    /** Tuple type. */
    export interface ITuple extends IJsonSchemaAttribute {
      /** Type discriminator. */
      type: "array";

      /** Tuple element types. */
      prefixItems: IJsonSchema[];

      /** Rest element type or `true` for any. */
      additionalItems?: boolean | IJsonSchema;

      /** Whether elements must be unique. */
      uniqueItems?: boolean;

      /** Minimum items. */
      minItems?: number & tags.Type<"uint64">;

      /** Maximum items. */
      maxItems?: number & tags.Type<"uint64">;
    }

    /** Object type. */
    export interface IObject extends IJsonSchemaAttribute.IObject {
      /** Property schemas. */
      properties?: Record<string, IJsonSchema>;

      /** Additional properties schema or `true` for any. */
      additionalProperties?: boolean | IJsonSchema;

      /** Required property names. */
      required?: string[];
    }

    /** Reference to named schema. */
    export interface IReference<Key = string> extends IJsonSchemaAttribute {
      /** Reference path (e.g., `#/components/schemas/TypeName`). */
      $ref: Key;
    }

    /** Union type (`oneOf`). */
    export interface IOneOf extends IJsonSchemaAttribute {
      /** Union member schemas. */
      oneOf: Exclude<IJsonSchema, IJsonSchema.IOneOf>[];

      /** Discriminator for tagged unions. */
      discriminator?: IOneOf.IDiscriminator;
    }
    export namespace IOneOf {
      /** Discriminator for tagged unions. */
      export interface IDiscriminator {
        /** Discriminator property name. */
        propertyName: string;

        /** Value to schema mapping. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
        mapping?: Record<string, string>;
      }
    }

    /** Null type. */
    export interface INull extends IJsonSchemaAttribute.INull {
<<<<<<< HEAD
      /** Default value of the `null` type. */
      default?: null;
    }

    /** Unknown, the `any` type. */
    export interface IUnknown extends IJsonSchemaAttribute.IUnknown {
      /** Default value of the `any` type. */
=======
      /** Default value. */
      default?: null;
    }

    /** Unknown (`any`) type. */
    export interface IUnknown extends IJsonSchemaAttribute.IUnknown {
      /** Default value. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
      default?: any;
    }
  }

<<<<<<< HEAD
  /**
   * Security scheme of Swagger Documents.
   *
   * `OpenApi.ISecurityScheme` is a data structure representing content of
   * `securitySchemes` in `swagger.json` file. It is composed with 5 types of
   * security schemes as an union type like below.
   *
   * @reference https://swagger.io/specification/#security-scheme-object
   */
=======
  /** Security scheme types. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  export type ISecurityScheme =
    | ISecurityScheme.IApiKey
    | ISecurityScheme.IHttpBasic
    | ISecurityScheme.IHttpBearer
    | ISecurityScheme.IOAuth2
    | ISecurityScheme.IOpenId;
  export namespace ISecurityScheme {
<<<<<<< HEAD
    /** Normal API key type. */
    export interface IApiKey {
      type: "apiKey";
      in?: "header" | "query" | "cookie";
      name?: string;
      description?: string;
    }

    /** HTTP basic authentication type. */
    export interface IHttpBasic {
      type: "http";
      scheme: "basic";
      description?: string;
    }

    /** HTTP bearer authentication type. */
    export interface IHttpBearer {
      type: "http";
      scheme: "bearer";
      bearerFormat?: string;
      description?: string;
    }

    /** OAuth2 authentication type. */
    export interface IOAuth2 {
      type: "oauth2";
      flows: IOAuth2.IFlowSet;
      description?: string;
    }
    export interface IOpenId {
      type: "openIdConnect";
      openIdConnectUrl: string;
      description?: string;
    }
    export namespace IOAuth2 {
      export interface IFlowSet {
        authorizationCode?: IFlow;
        implicit?: Omit<IFlow, "tokenUrl">;
        password?: Omit<IFlow, "authorizationUrl">;
        clientCredentials?: Omit<IFlow, "authorizationUrl">;
      }
      export interface IFlow {
        authorizationUrl?: string;
        tokenUrl?: string;
        refreshUrl?: string;
=======
    /** API key authentication. */
    export interface IApiKey {
      /** Scheme type. */
      type: "apiKey";

      /** Key location. */
      in?: "header" | "query" | "cookie";

      /** Key name. */
      name?: string;

      /** Scheme description. */
      description?: string;
    }

    /** HTTP basic authentication. */
    export interface IHttpBasic {
      /** Scheme type. */
      type: "http";

      /** Authentication scheme. */
      scheme: "basic";

      /** Scheme description. */
      description?: string;
    }

    /** HTTP bearer authentication. */
    export interface IHttpBearer {
      /** Scheme type. */
      type: "http";

      /** Authentication scheme. */
      scheme: "bearer";

      /** Bearer token format hint. */
      bearerFormat?: string;

      /** Scheme description. */
      description?: string;
    }

    /** OAuth2 authentication. */
    export interface IOAuth2 {
      /** Scheme type. */
      type: "oauth2";

      /** OAuth2 flows. */
      flows: IOAuth2.IFlowSet;

      /** Scheme description. */
      description?: string;
    }

    /** OpenID Connect authentication. */
    export interface IOpenId {
      /** Scheme type. */
      type: "openIdConnect";

      /** OpenID Connect discovery URL. */
      openIdConnectUrl: string;

      /** Scheme description. */
      description?: string;
    }
    export namespace IOAuth2 {
      /** OAuth2 flow configurations. */
      export interface IFlowSet {
        /** Authorization code flow. */
        authorizationCode?: IFlow;

        /** Implicit flow. */
        implicit?: Omit<IFlow, "tokenUrl">;

        /** Password flow. */
        password?: Omit<IFlow, "authorizationUrl">;

        /** Client credentials flow. */
        clientCredentials?: Omit<IFlow, "authorizationUrl">;
      }

      /** OAuth2 flow configuration. */
      export interface IFlow {
        /** Authorization URL. */
        authorizationUrl?: string;

        /** Token URL. */
        tokenUrl?: string;

        /** Refresh URL. */
        refreshUrl?: string;

        /** Available scopes. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
        scopes?: Record<string, string>;
      }
    }
  }
}
