import { IJsonSchemaAttribute } from "../schema/IJsonSchemaAttribute";
import * as tags from "../tags";

/**
 * OpenAPI v3.1 specification types (raw, unemended).
 *
 * `OpenApiV3_1` contains TypeScript type definitions for raw OpenAPI v3.1
 * documents as-is from the specification. Unlike {@link OpenApi}, this preserves
 * the original structure including `$ref` references and `allOf` compositions
 * without normalization.
 *
 * Key features in v3.1:
 *
 * - JSON Schema draft 2020-12 compatibility
 * - `type` can be an array: `type: ["string", "null"]`
 * - `const` keyword for constant values
 * - `prefixItems` for tuple definitions
 * - Webhooks support
 *
 * For a normalized format that simplifies schema processing, use
 * {@link OpenApi}.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The namespace mirrors the raw OpenAPI 3.1 object model, which aligns schemas with JSON Schema 2020-12: type arrays, `const`, `prefixItems`, webhooks and path item components. It keeps `$ref` and `allOf` as written so that a document is representable before the emender normalizes it.
 * @evidence contracts/common.md#clear-and-simple-design The same member layout as the 3.0 and 3.2 namespaces, so each version's converter reads one namespace and does not branch on a shared type.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It describes an input format and performs no conversion; upgrade to the normalized form lives in the utils package.
 * @evidence contracts/common.md#meaningful-documentation The comment lists the 3.1 features, contrasts the raw form with the normalized OpenApi type and links it.
 */
export namespace OpenApiV3_1 {
  /**
   * HTTP method of the operation.
   *
   * @evidence contracts/common.md#principled-implementation The eight methods that a 3.1 path item can hold; `query` is a 3.2 addition and is left out.
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
    | "trace";

  /* -----------------------------------------------------------
    DOCUMENTS
  ----------------------------------------------------------- */
  /**
   * OpenAPI document structure.
   *
   * @evidence contracts/common.md#principled-implementation The version is the template literal `3.1.${number}`; the document adds webhooks to the 3.0 shape, whose entries may be path items or `$ref` references to the pathItems component, and components is optional.
   * @evidence contracts/common.md#clear-and-simple-design One flat record with metadata types in its namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
   */
  export interface IDocument {
    /** OpenAPI version. */
    openapi: `3.1.${number}`;

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
     * @evidence contracts/common.md#principled-implementation Title and version are required, and a summary joins the description, which 3.1 introduced.
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
     * @evidence contracts/common.md#principled-implementation A name with an optional description, as in 3.1.
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
     * @evidence contracts/common.md#principled-implementation A name with an optional SPDX identifier and URL; the identifier is new in 3.1.
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
     * @evidence contracts/common.md#principled-implementation A required default, an optional enum that the specification requires to be non-empty (`@minItems 1`) and an optional description.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record; the non-empty rule is a documentation tag.
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
   * @evidence contracts/common.md#principled-implementation A partial method map plus path-level parameters, servers, summary, description and an `x-additionalOperations` extension that carries methods outside the 3.1 set, such as those from a downgraded 3.2 document.
   * @evidence contracts/common.md#clear-and-simple-design The reference alternatives are template-literal types and the extension uses a plain record.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The extension is a documented downgrade channel and not a special case for a consumer.
   * @evidence contracts/common.md#meaningful-documentation Each field has a comment and the extension explains its origin.
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
   * @evidence contracts/common.md#principled-implementation Parameters, request bodies and responses may be inline or `$ref` forms with typed component prefixes; typia's extension fields do not appear because they belong to the emended form.
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
     * @evidence contracts/common.md#principled-implementation Location is one of path, query, header and cookie, style covers the 3.1 styles and the schema is required.
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
     * @evidence contracts/common.md#principled-implementation Optional schema, example and named examples that may be `$ref` forms to the examples component.
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
   * @evidence contracts/common.md#principled-implementation All the 3.0 component maps plus `pathItems`, which 3.1 added so path items can be referenced.
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
   * @evidence contracts/common.md#principled-implementation A union of variants, which adds the mixed type-array form, constants, recursive references and a null type to the 3.0 set; a `type` array is its own variant so single-type variants can keep a literal discriminator.
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
     * @evidence contracts/common.md#principled-implementation The variant is the case where `type` is an array of type names, which 3.1 permits; it inherits the keywords of every single-type variant so that any keyword valid for one of the listed types is accepted, and widens default and enum to arbitrary values.
     * @evidence contracts/common.md#clear-and-simple-design Omit reuses type-specific keywords without their discriminators, defaults and enums; Partial reuses optional composition and reference keywords without requiring every composition at once.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts The type admits keywords that apply to only some of the listed types and does not check which type a keyword belongs to.
     * @evidence contracts/common.md#meaningful-documentation The comment says it covers multiple types in an array and each widened field is described.
     */
    export interface IMixed
      extends
        Partial<IConstant>,
        Omit<IBoolean, "type" | "default" | "enum">,
        Omit<INumber, "type" | "default" | "enum">,
        Omit<IString, "type" | "default" | "enum">,
        Omit<IArray, "type">,
        Omit<IObject, "type">,
        Partial<IOneOf>,
        Partial<IAnyOf>,
        Partial<IAllOf>,
        Partial<IReference> {
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
      default?: any;

      /** Allowed values. */
      enum?: any[];
    }

    /**
     * Constant value type.
     *
     * @evidence contracts/common.md#principled-implementation A `const` of boolean, number or string with a nullable flag retained from the 3.0 spelling, so a mixed document that still uses it is accepted.
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
     * @evidence contracts/common.md#principled-implementation The boolean variant adds an optional nullable flag, default and enum that may include null, on the attribute record without `examples`.
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
     * @evidence contracts/common.md#principled-implementation Integer keywords with int64 numbers for defaults, bounds and enum, and exclusive bounds that may be a number or the older boolean flag, which a 3.1 reader may still meet in migrated documents.
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
     * @evidence contracts/common.md#principled-implementation Number keywords, including exclusive bounds as a number or a boolean, and multipleOf above zero.
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
     * @evidence contracts/common.md#principled-implementation String keywords with format as the known set or any string, pattern, content media type and encoding, and unsigned length bounds; content keywords are part of 3.1.
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
     * @evidence contracts/common.md#principled-implementation JSON Schema 2020-12 items applies its schema after prefixItems, or to every element without a prefix. Boolean true permits those elements and false forbids them; omission is unconstrained. Legacy items arrays and additionalItems remain representable for converter compatibility, with reconciliation owned by the upgrader.
     * @evidence contracts/common.md#clear-and-simple-design Optional fields on the array attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts The type accepts both tuple spellings and leaves their reconciliation to the upgrader.
     * @evidence contracts/common.md#meaningful-documentation Member comments distinguish 2020-12 items and prefix semantics from legacy tuple keywords, including boolean and omitted items behavior and independent length bounds.
     */
    export interface IArray
      extends Omit<IJsonSchemaAttribute.IArray, "examples">, __IAttribute {
      /** Whether nullable. */
      nullable?: boolean;

      /**
       * Schema for elements after prefixItems, or every element without a
       * prefix.
       *
       * True or omission leaves these elements unconstrained; false forbids
       * them. A schema array is the legacy tuple spelling accepted by the
       * converter.
       */
      items?: boolean | IJsonSchema | IJsonSchema[];

      /** Positional prefix schemas; array length is constrained separately. */
      prefixItems?: IJsonSchema[];

      /** Whether elements must be unique. */
      uniqueItems?: boolean;

      /** Legacy rest keyword for an items array; not the 2020-12 prefix rest. */
      additionalItems?: boolean | IJsonSchema;

      /** Minimum items. */
      minItems?: number & tags.Type<"uint64">;

      /** Maximum items. */
      maxItems?: number & tags.Type<"uint64">;
    }

    /**
     * Reference to a named schema.
     *
     * @evidence contracts/common.md#principled-implementation A `$ref` typed by a key parameter defaulting to string, so unions can narrow the path prefix.
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
     * @evidence contracts/common.md#principled-implementation The record preserves a legacy 2019-09 $recursiveRef string. It does not represent the 2020-12 $dynamicRef keyword or resolve either reference form.
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
     * @evidence contracts/common.md#clear-and-simple-design Two fields, with the discriminator in the namespace.
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
     * @evidence contracts/common.md#principled-implementation The standalone null type with an optional null default; unlike 3.0, null is a real type in 3.1 and so has the same name as the normalized form.
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
     * @evidence contracts/common.md#principled-implementation The `oauth2` type with required flows and no metadata URL, which is a 3.2 addition.
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
       * @evidence contracts/common.md#principled-implementation Four optional flows, with Omit removing the URL that each flow does not use.
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
    }
  }
}
