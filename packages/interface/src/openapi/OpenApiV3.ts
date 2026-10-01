import { IJsonSchemaAttribute } from "../schema/IJsonSchemaAttribute";
import * as tags from "../tags";

/**
 * OpenAPI v3.0 specification types.
 *
 * `OpenApiV3` contains TypeScript type definitions for OpenAPI v3.0 documents.
 * Used for parsing and generating OpenAPI v3.0 specifications. For a normalized
 * format that unifies all OpenAPI versions, use {@link OpenApi} instead.
 *
 * Key differences from v3.1:
 *
 * - Uses `nullable: true` instead of `type: ["string", "null"]`
 * - No `const` keyword support
 * - No `prefixItems` for tuples
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The namespace mirrors the OpenAPI 3.0 object model so a 3.0 document parses without loss, including 3.0-only spellings such as `nullable`, boolean exclusive bounds and `allOf`, which the normalized OpenApi type removes. Version differences from 3.1 are listed in the comment.
 * @evidence contracts/common.md#clear-and-simple-design One namespace with the same member layout as the sibling version namespaces, so converters can be written version by version without cross-references between them.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It describes an input format and does not convert or normalize it; conversion is in the utils package.
 * @evidence contracts/common.md#meaningful-documentation The comment lists the main 3.0 differences and links the normalized type.
 */
export namespace OpenApiV3 {
  /**
   * HTTP method of the operation.
   *
   * @evidence contracts/common.md#principled-implementation The eight methods that a 3.0 path item can hold; `query` is omitted because it appears only in 3.2.
   * @evidence contracts/common.md#clear-and-simple-design One alias used by IPath.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A literal union.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment names it as the HTTP method of an operation.
   */
  export type Method =
    | "get"
    | "post"
    | "put"
    | "delete"
    | "options"
    | "head"
    | "patch"
    | "trace";

  /* -----------------------------------------------------------
    DOCUMENTS
  ----------------------------------------------------------- */
  /**
   * OpenAPI document structure.
   *
   * @evidence contracts/common.md#principled-implementation The version is `3.0` or `3.0.${number}`, which is the family of 3.0 versions the specification publishes; components and paths are optional as in 3.0.
   * @evidence contracts/common.md#clear-and-simple-design One flat record with metadata types in its namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
   */
  export interface IDocument {
    /** OpenAPI version. */
    openapi: "3.0" | `3.0.${number}`;

    /** List of servers. */
    servers?: IServer[];

    /** API metadata. */
    info?: IDocument.IInfo;

    /** Reusable components. */
    components?: IComponents;

    /** API paths and operations. */
    paths?: Record<string, IPath>;

    /** Global security requirements. */
    security?: Record<string, string[]>[];

    /** Tag definitions. */
    tags?: IDocument.ITag[];
  }
  export namespace IDocument {
    /**
     * API metadata.
     *
     * @evidence contracts/common.md#principled-implementation Title and version are required; the record has no `summary` because 3.0 does not define one.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IInfo {
      /** API title. */
      title: string;

      /** API description. */
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

    /**
     * Tag for grouping operations.
     *
     * @evidence contracts/common.md#principled-implementation A name with an optional description, which is all 3.0 defines for a tag.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface ITag {
      /** Tag name. */
      name: string;

      /** Tag description. */
      description?: string;
    }

    /**
     * Contact information.
     *
     * @evidence contracts/common.md#principled-implementation All three fields are optional and the email carries the Format email tag.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts The tag is a declared constraint, not a check performed here.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IContact {
      /** Contact name. */
      name?: string;

      /** Contact URL. */
      url?: string;

      /** Contact email. */
      email?: string & tags.Format<"email">;
    }

    /**
     * License information.
     *
     * @evidence contracts/common.md#principled-implementation A name and an optional URL, with no SPDX identifier since 3.0 lacks it.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface ILicense {
      /** License name. */
      name: string;

      /** License URL. */
      url?: string;
    }
  }

  /**
   * Server providing the API.
   *
   * @evidence contracts/common.md#principled-implementation A required URL with optional description and template variables.
   * @evidence contracts/common.md#clear-and-simple-design One record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
   */
  export interface IServer {
    /** Server URL. */
    url: string;

    /** Server description. */
    description?: string;

    /** URL template variables. */
    variables?: Record<string, IServer.IVariable>;
  }
  export namespace IServer {
    /**
     * URL template variable.
     *
     * @evidence contracts/common.md#principled-implementation A required default with optional enum and description.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IVariable {
      /** Default value. */
      default: string;

      /** Allowed values. */
      enum?: string[];

      /** Variable description. */
      description?: string;
    }
  }

  /* -----------------------------------------------------------
    PATH ITEMS
  ----------------------------------------------------------- */
  /**
   * Path item containing operations by HTTP method.
   *
   * @evidence contracts/common.md#principled-implementation A partial method map whose values may be undefined, plus path-level parameters that may be inline or `$ref` forms to the headers or parameters component, servers, summary and description, and an `x-additionalOperations` extension used when a 3.2 document is downgraded to carry non-standard methods.
   * @evidence contracts/common.md#clear-and-simple-design The reference alternatives are spelled out as template-literal reference types instead of a free string.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The extension is a documented downgrade channel and is not a special case for a consumer.
   * @evidence contracts/common.md#meaningful-documentation Each field has a comment, and the extension explains why it exists.
   */
  export interface IPath extends Partial<
    Record<Method, IOperation | undefined>
  > {
    /** Path-level parameters. */
    parameters?: Array<
      | IOperation.IParameter
      | IJsonSchema.IReference<`#/components/headers/${string}`>
      | IJsonSchema.IReference<`#/components/parameters/${string}`>
    >;

    /** Path-level servers. */
    servers?: IServer[];

    /** Path summary. */
    summary?: string;

    /** Path description. */
    description?: string;

    /**
     * Non-standard HTTP method operations (extension).
     *
     * Used when downgrading from OpenAPI v3.2 to preserve non-standard methods
     * like `query` or custom methods.
     */
    "x-additionalOperations"?: Record<string, IOperation>;
  }

  /**
   * API operation metadata.
   *
   * @evidence contracts/common.md#principled-implementation Parameters, request bodies and responses may each be inline or `$ref` forms, with the component path prefixes typed as template literals; there are no typia extension fields because those exist only on the emended form.
   * @evidence contracts/common.md#clear-and-simple-design One record; the inline forms are in the namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
   */
  export interface IOperation {
    /** Unique operation identifier. */
    operationId?: string;

    /** Operation parameters. */
    parameters?: Array<
      | IOperation.IParameter
      | IJsonSchema.IReference<`#/components/headers/${string}`>
      | IJsonSchema.IReference<`#/components/parameters/${string}`>
    >;

    /** Request body. */
    requestBody?:
      | IOperation.IRequestBody
      | IJsonSchema.IReference<`#/components/requestBodies/${string}`>;

    /** Response definitions by status code. */
    responses?: Record<
      string,
      | IOperation.IResponse
      | IJsonSchema.IReference<`#/components/responses/${string}`>
    >;

    /** Operation-level servers. */
    servers?: IServer[];

    /** Short summary. */
    summary?: string;

    /** Full description. */
    description?: string;

    /** Security requirements. */
    security?: Record<string, string[]>[];

    /** Operation tags. */
    tags?: string[];

    /** Whether deprecated. */
    deprecated?: boolean;
  }
  export namespace IOperation {
    /**
     * Operation parameter.
     *
     * @evidence contracts/common.md#principled-implementation Location is the four 3.0 values with no querystring, and style covers the 3.0 styles; schema is required for these parameters.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IParameter {
      /** Parameter name. */
      name?: string;

      /** Parameter location. */
      in: "path" | "query" | "header" | "cookie";

      /** Parameter schema. */
      schema: IJsonSchema;

      /** Whether required. */
      required?: boolean;

      /** Parameter serialization style. */
      style?:
        | "matrix"
        | "label"
        | "form"
        | "simple"
        | "spaceDelimited"
        | "pipeDelimited"
        | "deepObject";

      /** Whether arrays and objects are exploded during serialization. */
      explode?: boolean;

      /** Parameter description. */
      description?: string;

      /** Example value. */
      example?: any;

      /** Named examples. */
      examples?: Record<
        string,
        IExample | IJsonSchema.IReference<`#/components/examples/${string}`>
      >;
    }

    /**
     * Request body.
     *
     * @evidence contracts/common.md#principled-implementation Optional description, required flag and a map from media type string to media type record.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IRequestBody {
      /** Body description. */
      description?: string;

      /** Whether required. */
      required?: boolean;

      /** Body content by media type. */
      content?: Record<string, IMediaType>;
    }

    /**
     * Response definition.
     *
     * @evidence contracts/common.md#principled-implementation Content, headers and description are optional; response headers are parameters without their location or `$ref` forms, since a header's location is fixed.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IResponse {
      /** Response content by media type. */
      content?: Record<string, IMediaType>;

      /** Response headers. */
      headers?: Record<
        string,
        | Omit<IOperation.IParameter, "in">
        | IJsonSchema.IReference<`#/components/headers/${string}`>
      >;

      /** Response description. */
      description?: string;
    }

    /**
     * Media type definition.
     *
     * @evidence contracts/common.md#principled-implementation Optional schema, example and named examples, where each named example may be a `$ref` to the examples component.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IMediaType {
      /** Content schema. */
      schema?: IJsonSchema;

      /** Example value. */
      example?: any;

      /** Named examples. */
      examples?: Record<
        string,
        IExample | IJsonSchema.IReference<`#/components/examples/${string}`>
      >;
    }
  }

  /**
   * Example value definition.
   *
   * @evidence contracts/common.md#principled-implementation Optional summary, description, inline value and external value URL.
   * @evidence contracts/common.md#clear-and-simple-design One record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
   */
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

  /* -----------------------------------------------------------
    SCHEMA DEFINITIONS
  ----------------------------------------------------------- */
  /**
   * Reusable components storage.
   *
   * @evidence contracts/common.md#principled-implementation It keeps every component kind that 3.0 references can target (schemas, responses, parameters, request bodies, security schemes, headers and examples), because a 3.0 document uses `$ref` to all of them.
   * @evidence contracts/common.md#clear-and-simple-design Optional maps.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
   */
  export interface IComponents {
    /** Named schemas. */
    schemas?: Record<string, IJsonSchema>;

    /** Named responses. */
    responses?: Record<string, IOperation.IResponse>;

    /** Named parameters. */
    parameters?: Record<string, IOperation.IParameter>;

    /** Named request bodies. */
    requestBodies?: Record<string, IOperation.IRequestBody>;

    /** Named security schemes. */
    securitySchemes?: Record<string, ISecurityScheme>;

    /** Named headers. */
    headers?: Record<string, Omit<IOperation.IParameter, "in">>;

    /** Named examples. */
    examples?: Record<string, IExample>;
  }

  /**
   * JSON Schema type for OpenAPI v3.0.
   *
   * @evidence contracts/common.md#principled-implementation A union of variants where `nullable` is a flag on each typed variant and `allOf`, `anyOf` and `oneOf` are separate, as in 3.0, so legacy spellings are representable without being emended.
   * @evidence contracts/common.md#clear-and-simple-design One alias over variants in the same-named namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It represents the input format and does not normalize it.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment names the version.
   */
  export type IJsonSchema =
    | IJsonSchema.IBoolean
    | IJsonSchema.IInteger
    | IJsonSchema.INumber
    | IJsonSchema.IString
    | IJsonSchema.IArray
    | IJsonSchema.IObject
    | IJsonSchema.IReference
    | IJsonSchema.IAllOf
    | IJsonSchema.IAnyOf
    | IJsonSchema.IOneOf
    | IJsonSchema.INullOnly
    | IJsonSchema.IUnknown;
  export namespace IJsonSchema {
    /**
     * Boolean type.
     *
     * @evidence contracts/common.md#principled-implementation The boolean variant takes the boolean attribute record without `examples`, because 3.0 has only `example`, and adds nullable, default and enum, where both may include null.
     * @evidence contracts/common.md#clear-and-simple-design Optional fields.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IBoolean
      extends Omit<IJsonSchemaAttribute.IBoolean, "examples">, __IAttribute {
      /** Whether nullable. */
      nullable?: boolean;

      /** Default value. */
      default?: boolean | null;

      /** Allowed values. */
      enum?: Array<boolean | null>;
    }

    /**
     * Integer type.
     *
     * @evidence contracts/common.md#principled-implementation As for the integer type in the normalized form, with 3.0's `nullable`, enum with null and exclusive bounds that may be a number or the older boolean flag.
     * @evidence contracts/common.md#clear-and-simple-design Optional keywords on the integer attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts The boolean exclusive form is a 3.0 spelling kept for fidelity and not converted here.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IInteger
      extends Omit<IJsonSchemaAttribute.IInteger, "examples">, __IAttribute {
      /** Whether nullable. */
      nullable?: boolean;

      /** Default value. */
      default?: (number & tags.Type<"int64">) | null;

      /** Allowed values. */
      enum?: Array<(number & tags.Type<"int64">) | null>;

      /** Minimum value. */
      minimum?: number & tags.Type<"int64">;

      /** Maximum value. */
      maximum?: number & tags.Type<"int64">;

      /** Exclusive minimum. */
      exclusiveMinimum?: number | boolean;

      /** Exclusive maximum. */
      exclusiveMaximum?: number | boolean;

      /** Multiple of constraint. */
      multipleOf?: number & tags.ExclusiveMinimum<0>;
    }

    /**
     * Number (double) type.
     *
     * @evidence contracts/common.md#principled-implementation Number keywords as in integer without the int64 tag, including nullable, enum with null and exclusive bounds as a number or a boolean.
     * @evidence contracts/common.md#clear-and-simple-design Optional keywords on the number attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface INumber
      extends Omit<IJsonSchemaAttribute.INumber, "examples">, __IAttribute {
      /** Whether nullable. */
      nullable?: boolean;

      /** Default value. */
      default?: number | null;

      /** Allowed values. */
      enum?: Array<number | null>;

      /** Minimum value. */
      minimum?: number;

      /** Maximum value. */
      maximum?: number;

      /** Exclusive minimum. */
      exclusiveMinimum?: number | boolean;

      /** Exclusive maximum. */
      exclusiveMaximum?: number | boolean;

      /** Multiple of constraint. */
      multipleOf?: number & tags.ExclusiveMinimum<0>;
    }

    /**
     * String type.
     *
     * @evidence contracts/common.md#principled-implementation String keywords with nullable, enum with null, format as the known set or any string, pattern and unsigned length bounds; it has no content keywords because 3.0 does not define them.
     * @evidence contracts/common.md#clear-and-simple-design Optional keywords on the string attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IString
      extends Omit<IJsonSchemaAttribute.IString, "examples">, __IAttribute {
      /** Whether nullable. */
      nullable?: boolean;

      /** Default value. */
      default?: string | null;

      /** Allowed values. */
      enum?: Array<string | null>;

      /** String format. */
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

      /** Regex pattern. */
      pattern?: string;

      /** Minimum length. */
      minLength?: number & tags.Type<"uint64">;

      /** Maximum length. */
      maxLength?: number & tags.Type<"uint64">;
    }

    /**
     * Array type.
     *
     * @evidence contracts/common.md#principled-implementation A required items schema with nullable, uniqueness and unsigned size bounds; arrays here are homogeneous because 3.0 has no `prefixItems`.
     * @evidence contracts/common.md#clear-and-simple-design Fields on the array attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IArray
      extends Omit<IJsonSchemaAttribute.IArray, "examples">, __IAttribute {
      /** Whether nullable. */
      nullable?: boolean;

      /** Element type. */
      items: IJsonSchema;

      /** Whether elements must be unique. */
      uniqueItems?: boolean;

      /** Minimum items. */
      minItems?: number & tags.Type<"uint64">;

      /** Maximum items. */
      maxItems?: number & tags.Type<"uint64">;
    }

    /**
     * Object type.
     *
     * @evidence contracts/common.md#principled-implementation Properties, required names, additional properties and property-count bounds are all optional, with nullable, as 3.0 defines them.
     * @evidence contracts/common.md#clear-and-simple-design Optional fields on the object attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IObject
      extends Omit<IJsonSchemaAttribute.IObject, "examples">, __IAttribute {
      /** Whether nullable. */
      nullable?: boolean;

      /** Property schemas. */
      properties?: Record<string, IJsonSchema>;

      /** Required property names. */
      required?: string[];

      /** Additional properties schema. */
      additionalProperties?: boolean | IJsonSchema;

      /** Maximum properties. */
      maxProperties?: number;

      /** Minimum properties. */
      minProperties?: number;
    }

    /**
     * Reference to a named schema.
     *
     * @evidence contracts/common.md#principled-implementation A `$ref` typed by a key parameter that defaults to string, so callers such as the parameter and header unions can narrow the path prefix.
     * @evidence contracts/common.md#clear-and-simple-design One generic field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that does not resolve references.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment says it references a named schema.
     */
    export interface IReference<Key = string> extends __IAttribute {
      /** Reference path. */
      $ref: Key;
    }

    /**
     * All-of combination.
     *
     * @evidence contracts/common.md#principled-implementation A list of schemas that all must match, the 3.0 composition the emended form merges away.
     * @evidence contracts/common.md#clear-and-simple-design One field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that does not merge.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment names the combination.
     */
    export interface IAllOf extends __IAttribute {
      /** Schemas to combine. */
      allOf: IJsonSchema[];
    }

    /**
     * Any-of union.
     *
     * @evidence contracts/common.md#principled-implementation A list of member schemas of which at least one must match.
     * @evidence contracts/common.md#clear-and-simple-design One field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment names the union.
     */
    export interface IAnyOf extends __IAttribute {
      /** Union member schemas. */
      anyOf: IJsonSchema[];
    }

    /**
     * One-of union.
     *
     * @evidence contracts/common.md#principled-implementation A list of member schemas of which exactly one must match, with an optional discriminator for tagged unions.
     * @evidence contracts/common.md#clear-and-simple-design Two fields, with the discriminator record in the namespace.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment names the union.
     */
    export interface IOneOf extends __IAttribute {
      /** Union member schemas. */
      oneOf: IJsonSchema[];

      /** Discriminator for tagged unions. */
      discriminator?: IOneOf.IDiscriminator;
    }
    export namespace IOneOf {
      /**
       * Discriminator for tagged unions.
       *
       * @evidence contracts/common.md#principled-implementation A property name with an optional value to reference map.
       * @evidence contracts/common.md#clear-and-simple-design Two fields.
       * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
       * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
       */
      export interface IDiscriminator {
        /** Discriminator property name. */
        propertyName: string;

        /** Value to schema mapping. */
        mapping?: Record<string, string>;
      }
    }

    /**
     * Null type.
     *
     * @evidence contracts/common.md#principled-implementation A null type with an optional null default; the name differs from the 3.1 variants because 3.0 expresses null only through `nullable` on other types and this is the standalone case.
     * @evidence contracts/common.md#clear-and-simple-design One optional field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation One-line comments on the type and the default.
     */
    export interface INullOnly
      extends Omit<IJsonSchemaAttribute.INull, "examples">, __IAttribute {
      /** Default value. */
      default?: null;
    }

    /**
     * Unknown type.
     *
     * @evidence contracts/common.md#principled-implementation A schema with no type and an optional default of any value, representing an unconstrained value.
     * @evidence contracts/common.md#clear-and-simple-design One optional field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation One-line comments on the type and the default.
     */
    export interface IUnknown
      extends Omit<IJsonSchemaAttribute.IUnknown, "examples">, __IAttribute {
      /** Default value. */
      default?: any;
    }

    /** @ignore Base Attribute interface. */
    export interface __IAttribute extends Omit<
      IJsonSchemaAttribute,
      "examples"
    > {}
  }

  /**
   * Security scheme types.
   *
   * @evidence contracts/common.md#principled-implementation A union of five schemes discriminated by `type` and, for http, by `scheme`.
   * @evidence contracts/common.md#clear-and-simple-design One alias over five records in the same-named namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A representation; no secrets or checks.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment names the security scheme types.
   */
  export type ISecurityScheme =
    | ISecurityScheme.IApiKey
    | ISecurityScheme.IHttpBasic
    | ISecurityScheme.IHttpBearer
    | ISecurityScheme.IOAuth2
    | ISecurityScheme.IOpenId;
  export namespace ISecurityScheme {
    /**
     * API key authentication.
     *
     * @evidence contracts/common.md#principled-implementation The `apiKey` scheme with optional location and name.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
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

    /**
     * HTTP basic authentication.
     *
     * @evidence contracts/common.md#principled-implementation The `http` type with the literal scheme `basic`.
     * @evidence contracts/common.md#clear-and-simple-design Separate from bearer because the fields differ.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IHttpBasic {
      /** Scheme type. */
      type: "http";

      /** Authentication scheme. */
      scheme: "basic";

      /** Scheme description. */
      description?: string;
    }

    /**
     * HTTP bearer authentication.
     *
     * @evidence contracts/common.md#principled-implementation The `http` type with the literal scheme `bearer` and an optional token format.
     * @evidence contracts/common.md#clear-and-simple-design Separate from basic because only bearer has a format.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
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

    /**
     * OAuth2 authentication.
     *
     * @evidence contracts/common.md#principled-implementation The `oauth2` type with required flows; it has no metadata URL because 3.0 lacks it.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IOAuth2 {
      /** Scheme type. */
      type: "oauth2";

      /** OAuth2 flows. */
      flows: IOAuth2.IFlowSet;

      /** Scheme description. */
      description?: string;
    }

    /**
     * OpenID Connect authentication.
     *
     * @evidence contracts/common.md#principled-implementation The `openIdConnect` type with a required discovery URL.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IOpenId {
      /** Scheme type. */
      type: "openIdConnect";

      /** OpenID Connect discovery URL. */
      openIdConnectUrl: string;

      /** Scheme description. */
      description?: string;
    }
    export namespace IOAuth2 {
      /**
       * OAuth2 flow configurations.
       *
       * @evidence contracts/common.md#principled-implementation Four optional flows, with Omit removing the unused URL for each, and no device flow because 3.0 lacks it.
       * @evidence contracts/common.md#clear-and-simple-design One record using Omit over the shared flow shape.
       * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
       * @evidence contracts/common.md#meaningful-documentation Each field names its flow.
       */
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

      /**
       * OAuth2 flow configuration.
       *
       * @evidence contracts/common.md#principled-implementation Optional authorization, token and refresh URLs and scopes, since which are needed depends on the flow.
       * @evidence contracts/common.md#clear-and-simple-design One record shared by several flows.
       * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
       * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
       */
      export interface IFlow {
        /** Authorization URL. */
        authorizationUrl?: string;

        /** Token URL. */
        tokenUrl?: string;

        /** Refresh URL. */
        refreshUrl?: string;

        /** Available scopes. */
        scopes?: Record<string, string>;
      }
    }
  }
}
