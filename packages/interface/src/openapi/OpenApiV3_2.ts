import { IJsonSchemaAttribute } from "../schema/IJsonSchemaAttribute";
import * as tags from "../tags";

/**
 * OpenAPI v3.2 specification types (raw, unemended).
 *
 * `OpenApiV3_2` contains TypeScript type definitions for raw OpenAPI v3.2
 * documents as-is from the specification. Unlike {@link OpenApi}, this preserves
 * the original structure including `$ref` references and `allOf` compositions
 * without normalization.
 *
 * Key features in v3.2:
 *
 * - `query` HTTP method for safe read operations with request body
 * - `additionalOperations` for non-standard HTTP methods (LINK, UNLINK, etc.)
 * - `in: "querystring"` parameter location for full query schema
 * - Enhanced Tag structure with `summary`, `parent`, `kind`
 * - `itemSchema` for streaming (SSE, JSON Lines, etc.)
 * - OAuth2 Device Authorization Flow
 *
 * For a normalized format that simplifies schema processing, use
 * {@link OpenApi}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The namespace mirrors the raw OpenAPI 3.2 object model, which is the 3.1 model plus the `query` method, additional operations, a querystring parameter location, richer tags, streaming item schemas and the OAuth2 device flow; the emended OpenApi type is built from it.
 * @evidence contracts/common.md#clear-and-simple-design The same layout as the sibling version namespaces so each version's converter reads one namespace.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It describes an input format and performs no conversion.
 * @evidence contracts/common.md#meaningful-documentation The comment lists the 3.2 additions and links the normalized type.
 */
export namespace OpenApiV3_2 {
  /**
   * HTTP method of the operation.
   *
   * @evidence contracts/common.md#principled-implementation The nine methods of a 3.2 path item, which include `query`.
   * @evidence contracts/common.md#clear-and-simple-design One alias used by IPath.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A literal union.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment names the HTTP method of an operation.
   */
  export type Method =
    | "get"
    | "post"
    | "put"
    | "delete"
    | "options"
    | "head"
    | "patch"
    | "trace"
    | "query";

  /* -----------------------------------------------------------
    DOCUMENTS
  ----------------------------------------------------------- */
  /**
   * OpenAPI document structure.
   *
   * @evidence contracts/common.md#principled-implementation The version is `3.2.${number}`; webhooks and components follow the 3.1 shape.
   * @evidence contracts/common.md#clear-and-simple-design One flat record with metadata types in its namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
   */
  export interface IDocument {
    /** OpenAPI version. */
    openapi: `3.2.${number}`;

    /** List of servers. */
    servers?: IServer[];

    /** API metadata. */
    info?: IDocument.IInfo;

    /** Reusable components. */
    components?: IComponents;

    /** API paths and operations. */
    paths?: Record<string, IPath>;

    /** Webhook definitions. */
    webhooks?: Record<
      string,
      IJsonSchema.IReference<`#/components/pathItems/${string}`> | IPath
    >;

    /** Global security requirements. */
    security?: Record<string, string[]>[];

    /** Tag definitions. */
    tags?: IDocument.ITag[];
  }
  export namespace IDocument {
    /**
     * API metadata.
     *
     * @evidence contracts/common.md#principled-implementation Title and version are required, with summary and description optional as in 3.1.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
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

    /**
     * Tag for grouping operations.
     *
     * @evidence contracts/common.md#principled-implementation A name with optional summary, description, parent and kind, so tags can form a hierarchy and carry a classification, which are 3.2 additions.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment, with example kinds.
     */
    export interface ITag {
      /** Tag name. */
      name: string;

      /** Short summary for display in tag lists. */
      summary?: string;

      /** Tag description. */
      description?: string;

      /** Parent tag name for hierarchical organization. */
      parent?: string;

      /** Tag classification (e.g., "nav", "badge"). */
      kind?: string;
    }

    /**
     * Contact information.
     *
     * @evidence contracts/common.md#principled-implementation All fields are optional and the email carries the Format email tag.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts The tag is a declared constraint, not a check made here.
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
     * @evidence contracts/common.md#principled-implementation A name with an optional SPDX identifier and URL.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface ILicense {
      /** License name. */
      name: string;

      /** SPDX license identifier. */
      identifier?: string;

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
     * @evidence contracts/common.md#principled-implementation A required default with an optional non-empty enum and description.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IVariable {
      /** Default value. */
      default: string;

      /** Allowed values. @minItems 1 */
      enum?: string[];

      /** Variable description. */
      description?: string;
    }
  }

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  /**
   * Path item containing operations by HTTP method.
   *
   * @evidence contracts/common.md#principled-implementation A partial method map, which now includes `query`, plus an `additionalOperations` record for non-standard methods such as LINK and PURGE, replacing the extension spelling used in earlier versions.
   * @evidence contracts/common.md#clear-and-simple-design The record keeps the same members as 3.1 with the standard name for additional operations.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation Each field has a comment, with examples of additional methods.
   */
  export interface IPath extends Partial<Record<Method, IOperation>> {
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
     * Additional non-standard HTTP method operations (e.g., LINK, UNLINK,
     * PURGE).
     */
    additionalOperations?: Record<string, IOperation>;
  }

  /**
   * API operation metadata.
   *
   * @evidence contracts/common.md#principled-implementation Parameters, request bodies and responses may be inline or `$ref` forms with typed component prefixes.
   * @evidence contracts/common.md#clear-and-simple-design One record with the inline forms in its namespace.
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
     * @evidence contracts/common.md#principled-implementation Location adds `querystring`, whose schema is therefore optional and replaced by a media-type-keyed `content`; style adds `cookie`.
     * @evidence contracts/common.md#clear-and-simple-design One record; the optionality of schema is what separates it from the earlier versions.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment, including the querystring case.
     */
    export interface IParameter {
      /** Parameter name. */
      name?: string;

      /** Parameter location. */
      in: "path" | "query" | "querystring" | "header" | "cookie";

      /** Parameter schema for every location except `querystring`. */
      schema?: IJsonSchema;

      /** Media types for a content-backed `querystring` parameter. */
      content?: Record<string, IMediaType>;

      /** Whether required. */
      required?: boolean;

      /** Parameter serialization style. */
      style?:
        | "matrix"
        | "label"
        | "form"
        | "cookie"
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
     * @evidence contracts/common.md#principled-implementation Content, headers and description are optional, with response headers as parameters without a location or as `$ref` forms.
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
     * @evidence contracts/common.md#principled-implementation A media type adds an optional item schema for streamed payloads such as server-sent events to the schema and examples.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IMediaType {
      /** Content schema. */
      schema?: IJsonSchema;

      /** Schema for streaming items (SSE, JSON Lines, etc.). */
      itemSchema?: IJsonSchema;

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
   * @evidence contracts/common.md#principled-implementation The same eight component maps as 3.1, including path items.
   * @evidence contracts/common.md#clear-and-simple-design Optional maps.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
   */
  export interface IComponents {
    /** Named schemas. */
    schemas?: Record<string, IJsonSchema>;

    /** Named path items. */
    pathItems?: Record<string, IPath>;

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
   * JSON Schema type for OpenAPI v3.1.
   *
   * @evidence contracts/common.md#principled-implementation A union of variants as in 3.1, because 3.2 keeps the 2020-12 schema dialect.
   * @evidence contracts/common.md#clear-and-simple-design One alias over variants in the same-named namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It represents the input form and does not normalize it.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment names the version.
   */
  export type IJsonSchema =
    | IJsonSchema.IMixed
    | IJsonSchema.IConstant
    | IJsonSchema.IBoolean
    | IJsonSchema.IInteger
    | IJsonSchema.INumber
    | IJsonSchema.IString
    | IJsonSchema.IArray
    | IJsonSchema.IObject
    | IJsonSchema.IReference
    | IJsonSchema.IRecursiveReference
    | IJsonSchema.IAllOf
    | IJsonSchema.IAnyOf
    | IJsonSchema.IOneOf
    | IJsonSchema.INull
    | IJsonSchema.IUnknown;
  export namespace IJsonSchema {
    /**
     * Mixed type (multiple types in array).
     *
     * @evidence contracts/common.md#principled-implementation The case where `type` is an array of type names; it inherits the keywords of every single-type variant and widens default and enum.
     * @evidence contracts/common.md#clear-and-simple-design One interface assembled through Omit so keyword definitions stay in one place.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts The type admits keywords that apply to only some of the listed types and does not check which type a keyword belongs to.
     * @evidence contracts/common.md#meaningful-documentation The comment says it covers multiple types in an array.
     */
    export interface IMixed
      extends
        IConstant,
        Omit<IBoolean, "type" | "default" | "enum">,
        Omit<INumber, "type" | "default" | "enum">,
        Omit<IString, "type" | "default" | "enum">,
        Omit<IArray, "type">,
        Omit<IObject, "type">,
        IOneOf,
        IAnyOf,
        IAllOf,
        IReference {
      /** Array of type discriminators. */
      type: Array<
        | "boolean"
        | "integer"
        | "number"
        | "string"
        | "array"
        | "object"
        | "null"
      >;

      /** Default value. */
      default?: any[] | null;

      /** Allowed values. */
      enum?: any[];
    }

    /**
     * Constant value type.
     *
     * @evidence contracts/common.md#principled-implementation A `const` of boolean, number or string, with the nullable flag retained from older spellings.
     * @evidence contracts/common.md#clear-and-simple-design Two fields on the shared attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IConstant extends __IAttribute {
      /** Constant value. */
      const: boolean | number | string;

      /** Whether nullable. */
      nullable?: boolean;
    }

    /**
     * Boolean type.
     *
     * @evidence contracts/common.md#principled-implementation Optional nullable flag, default and enum that may include null.
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
     * @evidence contracts/common.md#principled-implementation Integer keywords with int64 numbers and exclusive bounds that may be numbers or the older boolean flag.
     * @evidence contracts/common.md#clear-and-simple-design Optional keywords on the integer attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
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
      exclusiveMinimum?: (number & tags.Type<"int64">) | boolean;

      /** Exclusive maximum. */
      exclusiveMaximum?: (number & tags.Type<"int64">) | boolean;

      /** Multiple of constraint. */
      multipleOf?: number & tags.ExclusiveMinimum<0>;
    }

    /**
     * Number (double) type.
     *
     * @evidence contracts/common.md#principled-implementation Number keywords with exclusive bounds as numbers or booleans and multipleOf above zero.
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
     * @evidence contracts/common.md#principled-implementation String keywords with format as the known set or any string, pattern, content media type and encoding, and unsigned length bounds.
     * @evidence contracts/common.md#clear-and-simple-design Optional keywords on the string attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that does not validate pattern or format.
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

      /** Content media type. */
      contentMediaType?: string;

      /** Content encoding. */
      contentEncoding?: string;

      /** Minimum length. */
      minLength?: number & tags.Type<"uint64">;

      /** Maximum length. */
      maxLength?: number & tags.Type<"uint64">;
    }

    /**
     * Object type.
     *
     * @evidence contracts/common.md#principled-implementation Properties, required names, additional properties and property-count bounds are optional, with nullable retained.
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
     * Array type.
     *
     * @evidence contracts/common.md#principled-implementation Items may be a schema or a list of schemas alongside `prefixItems` and `additionalItems`, so both tuple spellings are representable.
     * @evidence contracts/common.md#clear-and-simple-design Optional fields on the array attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts The type accepts both spellings and leaves their reconciliation to the upgrader.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IArray
      extends Omit<IJsonSchemaAttribute.IArray, "examples">, __IAttribute {
      /** Whether nullable. */
      nullable?: boolean;

      /** Element type (or tuple types). */
      items?: IJsonSchema | IJsonSchema[];

      /** Tuple prefix items. */
      prefixItems?: IJsonSchema[];

      /** Whether elements must be unique. */
      uniqueItems?: boolean;

      /** Additional items schema. */
      additionalItems?: boolean | IJsonSchema;

      /** Minimum items. */
      minItems?: number & tags.Type<"uint64">;

      /** Maximum items. */
      maxItems?: number & tags.Type<"uint64">;
    }

    /**
     * Reference to a named schema.
     *
     * @evidence contracts/common.md#principled-implementation A `$ref` typed by a key parameter defaulting to string.
     * @evidence contracts/common.md#clear-and-simple-design One generic field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that does not resolve references.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment says it references a named schema.
     */
    export interface IReference<Key = string> extends __IAttribute {
      /** Reference path. */
      $ref: Key;
    }

    /**
     * Recursive reference.
     *
     * @evidence contracts/common.md#principled-implementation A `$recursiveRef` string for recursive structures.
     * @evidence contracts/common.md#clear-and-simple-design One field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that does not resolve the reference.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment names it as a recursive reference.
     */
    export interface IRecursiveReference extends __IAttribute {
      /** Recursive reference path. */
      $recursiveRef: string;
    }

    /**
     * All-of combination.
     *
     * @evidence contracts/common.md#principled-implementation A list of schemas that must all match.
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
     * @evidence contracts/common.md#principled-implementation A list of member schemas of which exactly one must match, with an optional discriminator.
     * @evidence contracts/common.md#clear-and-simple-design Two fields.
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
     * @evidence contracts/common.md#principled-implementation The standalone null type with an optional null default.
     * @evidence contracts/common.md#clear-and-simple-design One optional field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation One-line comments on the type and the default.
     */
    export interface INull
      extends Omit<IJsonSchemaAttribute.INull, "examples">, __IAttribute {
      /** Default value. */
      default?: null;
    }

    /**
     * Unknown type.
     *
     * @evidence contracts/common.md#principled-implementation A schema with no type and an optional default of any value.
     * @evidence contracts/common.md#clear-and-simple-design One optional field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation One-line comments on the type and the default.
     */
    export interface IUnknown
      extends Omit<IJsonSchemaAttribute.IUnknown, "examples">, __IAttribute {
      /** Type discriminator (undefined for unknown). */
      type?: undefined;

      /** Default value. */
      default?: any;
    }

    /** @ignore Base Attribute interface. */
    export interface __IAttribute extends Omit<
      IJsonSchemaAttribute,
      "examples"
    > {
      /** Example values. */
      examples?: any[];
    }
  }

  /**
   * Security scheme types.
   *
   * @evidence contracts/common.md#principled-implementation A union of five schemes discriminated by `type` and, for http, by `scheme`.
   * @evidence contracts/common.md#clear-and-simple-design One alias over five records.
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
     * @evidence contracts/common.md#principled-implementation The `oauth2` type with required flows and an optional metadata discovery URL, which 3.2 added.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IOAuth2 {
      /** Scheme type. */
      type: "oauth2";

      /** OAuth2 flows. */
      flows: IOAuth2.IFlowSet;

      /** OAuth2 metadata discovery URL. */
      oauth2MetadataUrl?: string;

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
       * @evidence contracts/common.md#principled-implementation The four earlier flows with Omit removing the unused URL, plus an optional device authorization flow.
       * @evidence contracts/common.md#clear-and-simple-design One record using Omit over the shared flow shape and a separate device flow record.
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

        /** Device authorization flow. */
        deviceAuthorization?: IDeviceFlow;
      }

      /**
       * OAuth2 flow configuration.
       *
       * @evidence contracts/common.md#principled-implementation Optional authorization, token and refresh URLs and scopes, since the required ones depend on the flow.
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

      /**
       * OAuth2 device authorization flow.
       *
       * @evidence contracts/common.md#principled-implementation The device authorization URL and token URL are required and the refresh URL and scopes optional, since the device grant needs both endpoints.
       * @evidence contracts/common.md#clear-and-simple-design A separate record because its required fields differ from IFlow.
       * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
       * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
       */
      export interface IDeviceFlow {
        /** Device authorization URL. */
        deviceAuthorizationUrl: string;

        /** Token URL. */
        tokenUrl: string;

        /** Refresh URL. */
        refreshUrl?: string;

        /** Available scopes. */
        scopes?: Record<string, string>;
      }
    }
  }
}
