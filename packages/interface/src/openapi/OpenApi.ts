import { IJsonSchemaAttribute } from "../schema/IJsonSchemaAttribute";
import * as tags from "../tags";

/**
 * Emended OpenAPI v3.2 specification.
 *
 * `OpenApi` is a refined OpenAPI v3.2 specification that normalizes ambiguous
 * and redundant expressions from various OpenAPI versions (Swagger 2.0, OpenAPI
 * 3.0, 3.1, 3.2). This unified format simplifies schema processing for `typia`
 * and `@nestia/sdk`.
 *
 * Key simplifications:
 *
 * - Schema `$ref` references are unified to `#/components/schemas/{name}` format
 * - Non-schema references (parameters, responses) are resolved inline
 * - `nullable` is converted to `{ oneOf: [schema, { type: "null" }] }`
 * - `allOf` compositions are merged into single schemas
 * - Schema attributes are normalized across all versions
 *
 * Use `HttpLlm.application()` from `@typia/utils` to convert
 * `OpenApi.IDocument` into {@link IHttpLlmApplication} for LLM function
 * calling.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The namespace is typia's single normalized target for every OpenAPI input version: references to schemas use one path form, other references are inlined, nullable and allOf are rewritten to oneOf and merged forms, and every consumer is written once against this one shape. The marker field on the document records that this normalization has run.
 * @evidence contracts/common.md#clear-and-simple-design One namespace holding the document and its parts so a consumer imports one name; version-specific shapes live in separate namespaces and are converted by the utils package.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The type describes the normalized form and does not itself convert or patch any input document.
 * @evidence contracts/common.md#meaningful-documentation The comment lists the simplifications, names the marker used by the converters and points to the LLM conversion that consumes it; its stray escape and the earlier marker name have been corrected.
 */
export namespace OpenApi {
  /**
   * HTTP method supported by OpenAPI operations.
   *
   * Standard HTTP methods used in REST APIs. Each path can have multiple
   * operations, one per HTTP method.
   *
   * @evidence contracts/common.md#principled-implementation A closed union of the HTTP method names that a path item can hold, including `trace` and the newer `query`, so a path's operation record is keyed by exactly these.
   * @evidence contracts/common.md#clear-and-simple-design One alias that IPath reuses as its key set.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A literal union; unknown methods go through IPath.additionalOperations.
   * @evidence contracts/common.md#meaningful-documentation The comment says it lists the standard methods that carry operations.
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

  /**
   * Root document structure for emended OpenAPI v3.2.
   *
   * Contains all API metadata, paths, operations, and reusable components. The
   * `x-typia-emended-v12` marker indicates this document has been processed by
   * `samchon/typia` to normalize schema formats.
   *
   * @evidence contracts/common.md#principled-implementation Version is a template literal `3.2.${number}`, so a 3.2 patch release is accepted and other versions are rejected; components is required because normalized schemas live there, while paths and webhooks are optional as in the specification. The marker literal true distinguishes an emended document.
   * @evidence contracts/common.md#clear-and-simple-design One flat document record with info, tag and contact records in its own namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The literal marker is a contract between producer and consumer and not a test hook.
   * @evidence contracts/common.md#meaningful-documentation The comment explains the role of the marker field and each member has a one-line comment.
   */
  export interface IDocument {
    /** OpenAPI version. */
    openapi: `3.2.${number}`;

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

    /** Marker for emended document by `typia` */
    "x-typia-emended-v12": true;
  }
  export namespace IDocument {
    /**
     * API metadata and identification.
     *
     * Contains essential information about the API including title, version,
     * contact information, and licensing details.
     *
     * @evidence contracts/common.md#principled-implementation Title and version are required, as the specification requires, and the rest is optional descriptive metadata including a summary.
     * @evidence contracts/common.md#clear-and-simple-design One record; contact and license are separate records.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation The comment summarizes what the record identifies and each field is documented.
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
     * @evidence contracts/common.md#principled-implementation A tag has a required name and optional summary, description, parent and kind, which reflects the hierarchical tag fields of version 3.2.
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
     * @evidence contracts/common.md#principled-implementation Name, URL and email are all optional; the email is typed with the Format email tag, so a typia validation of a document checks its syntax.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts The format tag is a declared constraint and no check is performed in the declaration.
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
     * @evidence contracts/common.md#principled-implementation A name is required and the SPDX identifier and URL are optional, as in the specification.
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
   * @evidence contracts/common.md#principled-implementation The URL is required and variables are optional named values for URL templates.
   * @evidence contracts/common.md#clear-and-simple-design One record, with the variable record in its namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that does not substitute variables.
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
     * @evidence contracts/common.md#principled-implementation Each variable has a required default and optional enum and description, which is how the specification defines a server variable.
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

  /**
   * Path item containing operations by HTTP method.
   *
   * @evidence contracts/common.md#principled-implementation The path item extends a partial record of method to operation, so each method is optional, and adds servers, summary, description and a map of operations for non-standard methods; this represents a path with any subset of operations.
   * @evidence contracts/common.md#clear-and-simple-design Inheriting from Partial<Record<Method, IOperation>> avoids listing the methods twice.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record; no inference of missing methods.
   * @evidence contracts/common.md#meaningful-documentation Each field has a comment, with LINK and PURGE as examples of additional methods.
   */
  export interface IPath extends Partial<Record<Method, IOperation>> {
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
   * @evidence contracts/common.md#principled-implementation Operation fields mirror the specification, with typia's three `x-samchon-*` extension fields for LLM exclusion, accessor naming and controller naming; `responses` is a record keyed by status code string.
   * @evidence contracts/common.md#clear-and-simple-design One record; parameters, bodies, responses, content and media types are in the namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Extension fields are documented contract keys, and not special cases for a consumer.
   * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment, including what each extension does.
   */
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
    /**
     * Operation parameter.
     *
     * @evidence contracts/common.md#principled-implementation Location is a closed union including `querystring`, whose content is described by media type instead of a schema style; style and explode record serialization. Name is optional because querystring parameters have none.
     * @evidence contracts/common.md#clear-and-simple-design One record with serialization fields flattened in.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record; the style defaults are applied by consumers.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment, including the content-backed querystring case.
     */
    export interface IParameter {
      /** Parameter name. */
      name?: string;

      /** Parameter location. */
      in: "path" | "query" | "querystring" | "header" | "cookie";

      /** Normalized parameter schema. */
      schema: IJsonSchema;

      /** Source media types for a content-backed querystring parameter. */
      content?: IContent;

      /** Whether required. */
      required?: boolean;

      /** OpenAPI parameter serialization style. */
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
      examples?: Record<string, IExample>;
    }

    /**
     * Request body.
     *
     * @evidence contracts/common.md#principled-implementation Content is a map from media type to its definition; description, required and the Nestia encryption flag are optional.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts The encryption flag is a documented extension and not behavior in this type.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
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

    /**
     * Response definition.
     *
     * @evidence contracts/common.md#principled-implementation A response has optional headers, content and description; headers reuse the parameter shape so serialization fields are expressed once.
     * @evidence contracts/common.md#clear-and-simple-design One record that reuses IParameter.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
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

    /**
     * Content by media type.
     *
     * @evidence contracts/common.md#principled-implementation A partial record keyed by the content type union lets a body or response have any subset of media types.
     * @evidence contracts/common.md#clear-and-simple-design An empty interface extending a partial record, giving the map a name.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment names it as content by media type.
     */
    export interface IContent extends Partial<
      Record<ContentType, IMediaType>
    > {}

    /**
     * Media type definition.
     *
     * @evidence contracts/common.md#principled-implementation A media type holds an optional schema, an optional item schema for streaming media and examples, which together describe both whole-body and per-item payloads.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment, naming SSE and JSON Lines for the item schema.
     */
    export interface IMediaType {
      /** Content schema. */
      schema?: IJsonSchema;

      /** Schema for streaming items (SSE, JSON Lines, etc.). */
      itemSchema?: IJsonSchema;

      /** Example value. */
      example?: any;

      /** Named examples. */
      examples?: Record<string, IExample>;
    }

    /**
     * Supported content types.
     *
     * @evidence contracts/common.md#principled-implementation Known content types are listed as literals and `string & {}` admits any other string while keeping completion for the known ones. The URL-encoded literal is spelled `x-www-form-url-encoded`, as in the existing declaration.
     * @evidence contracts/common.md#clear-and-simple-design One alias.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A literal union; no content negotiation is implemented here.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment says it lists supported content types.
     */
    export type ContentType =
      | "text/plain"
      | "application/json"
      | "application/x-www-form-url-encoded"
      | "multipart/form-data"
      | "*/*"
      | (string & {});
  }

  /**
   * Example value definition.
   *
   * @evidence contracts/common.md#principled-implementation An example has optional summary, description, inline value and external value, matching the specification's example object.
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

  /**
   * Reusable components storage.
   *
   * @evidence contracts/common.md#principled-implementation Only schemas and security schemes are kept, because the emended form inlines other component kinds.
   * @evidence contracts/common.md#clear-and-simple-design Optional maps.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation The comment says it is a reusable component store and each field has a comment.
   */
  export interface IComponents {
    /** Named schemas. */
    schemas?: Record<string, IJsonSchema>;

    /** Named security schemes. */
    securitySchemes?: Record<string, ISecurityScheme>;
  }

  /**
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
   *
   * @evidence contracts/common.md#principled-implementation A union of variants discriminated by `type`, `const`, `$ref`, `oneOf` or their absence, where tuples are separated from arrays and unions use oneOf, so a schema consumer narrows structurally with no ambiguity between old spellings.
   * @evidence contracts/common.md#clear-and-simple-design One alias over variants declared in the same-named namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It expresses the normalized form only; legacy spellings are not accepted by the type.
   * @evidence contracts/common.md#meaningful-documentation The comment states how the format differs from raw JSON Schema.
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
    /**
     * Constant value type.
     *
     * @evidence contracts/common.md#principled-implementation A `const` of boolean, number or string; it extends the attribute record without a type discriminator because the value determines the type.
     * @evidence contracts/common.md#clear-and-simple-design One field on the shared attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation One-line comments on the type and the field.
     */
    export interface IConstant extends IJsonSchemaAttribute {
      /** Constant value. */
      const: boolean | number | string;
    }

    /**
     * Boolean type.
     *
     * @evidence contracts/common.md#principled-implementation The boolean variant adds only an optional default to the boolean attribute record, because boolean admits no further constraints.
     * @evidence contracts/common.md#clear-and-simple-design One optional field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation One-line comments on the type and the field.
     */
    export interface IBoolean extends IJsonSchemaAttribute.IBoolean {
      /** Default value. */
      default?: boolean;
    }

    /**
     * Integer type.
     *
     * @evidence contracts/common.md#principled-implementation Bounds and default are typed as int64 numbers, and multipleOf is a number above zero, matching the JSON Schema integer keywords while limiting numbers to the 64-bit range typia generates.
     * @evidence contracts/common.md#clear-and-simple-design Optional keywords on the integer attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts The type tags declare ranges and no check is performed in the declaration.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
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

    /**
     * Number (double) type.
     *
     * @evidence contracts/common.md#principled-implementation Bounds, default and multipleOf use plain numbers, with multipleOf above zero.
     * @evidence contracts/common.md#clear-and-simple-design Optional keywords on the number attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
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

    /**
     * String type.
     *
     * @evidence contracts/common.md#principled-implementation Format is the known set or any string, pattern and content keywords are strings, and length bounds are unsigned 64-bit; the content encoding field is included in the normalized form.
     * @evidence contracts/common.md#clear-and-simple-design Optional keywords on the string attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that does not validate pattern or format.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IString extends IJsonSchemaAttribute.IString {
      /** Default value. */
      default?: string;

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
     * Array type.
     *
     * @evidence contracts/common.md#principled-implementation A required item schema and optional uniqueness and size bounds describe homogeneous arrays; tuples have their own variant so `items` is never an array here.
     * @evidence contracts/common.md#clear-and-simple-design Fields on the array attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
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

    /**
     * Tuple type.
     *
     * @evidence contracts/common.md#principled-implementation The variant has type `array`, a required `prefixItems` list and optional rest schema as `additionalItems`, which are the 2020-12 tuple keywords, and it carries its own bounds; it extends the base attribute record because its discriminator is declared explicitly.
     * @evidence contracts/common.md#clear-and-simple-design Separate from IArray so a consumer distinguishes tuple from array by shape.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
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

    /**
     * Object type.
     *
     * @evidence contracts/common.md#principled-implementation Properties, additional properties and required names are all optional, and additionalProperties is a boolean or a schema as in JSON Schema.
     * @evidence contracts/common.md#clear-and-simple-design Optional fields on the object attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IObject extends IJsonSchemaAttribute.IObject {
      /** Property schemas. */
      properties?: Record<string, IJsonSchema>;

      /** Additional properties schema or `true` for any. */
      additionalProperties?: boolean | IJsonSchema;

      /** Required property names. */
      required?: string[];
    }

    /**
     * Reference to named schema.
     *
     * @evidence contracts/common.md#principled-implementation The key type parameter defaults to string and is the type of `$ref`, which lets a stricter key shape be used by callers that need it.
     * @evidence contracts/common.md#clear-and-simple-design One generic field on the attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that does not resolve references.
     * @evidence contracts/common.md#meaningful-documentation The comment gives the reference path format.
     */
    export interface IReference<Key = string> extends IJsonSchemaAttribute {
      /** Reference path (e.g., `#/components/schemas/TypeName`). */
      $ref: Key;
    }

    /**
     * Union type (`oneOf`).
     *
     * @evidence contracts/common.md#principled-implementation Union members exclude nested oneOf so unions are flat, with an optional discriminator, which is how the normalized form represents unions.
     * @evidence contracts/common.md#clear-and-simple-design Two fields.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts Flattening is expressed by the type and not performed here.
     * @evidence contracts/common.md#meaningful-documentation The comment says it is the normalized union and each field is described.
     */
    export interface IOneOf extends IJsonSchemaAttribute {
      /** Union member schemas. */
      oneOf: Exclude<IJsonSchema, IJsonSchema.IOneOf>[];

      /** Discriminator for tagged unions. */
      discriminator?: IOneOf.IDiscriminator;
    }
    export namespace IOneOf {
      /**
       * Discriminator for tagged unions.
       *
       * @evidence contracts/common.md#principled-implementation A property name and an optional value-to-reference map describe the variant selector of a tagged union.
       * @evidence contracts/common.md#clear-and-simple-design Two fields.
       * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that does not verify that variants carry the property.
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
     * @evidence contracts/common.md#principled-implementation The null variant has type null and an optional default of null, the only value it admits.
     * @evidence contracts/common.md#clear-and-simple-design One optional field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation One-line comments on the type and the field.
     */
    export interface INull extends IJsonSchemaAttribute.INull {
      /** Default value. */
      default?: null;
    }

    /**
     * Unknown (`any`) type.
     *
     * @evidence contracts/common.md#principled-implementation A schema with no type and an optional default of any value represents an unconstrained value.
     * @evidence contracts/common.md#clear-and-simple-design One optional field on the unknown attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation One-line comments on the type and the field.
     */
    export interface IUnknown extends IJsonSchemaAttribute.IUnknown {
      /** Default value. */
      default?: any;
    }
  }

  /**
   * Security scheme types.
   *
   * @evidence contracts/common.md#principled-implementation A union of five schemes, discriminated by `type` and, for HTTP, by `scheme`, so each authentication method has the fields it needs and no others.
   * @evidence contracts/common.md#clear-and-simple-design One alias over five records in the same-named namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A representation of credentials requirements; no secrets or checks.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment names it as the security scheme types.
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
     * @evidence contracts/common.md#principled-implementation The `apiKey` scheme with an optional location among header, query and cookie and an optional name.
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
     * @evidence contracts/common.md#principled-implementation The `http` type with the literal scheme `basic`, which is how the specification expresses HTTP basic authentication.
     * @evidence contracts/common.md#clear-and-simple-design A separate record from bearer because the schemes carry different fields.
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
     * @evidence contracts/common.md#principled-implementation The `http` type with the literal scheme `bearer` and an optional format hint for the token.
     * @evidence contracts/common.md#clear-and-simple-design A separate record from basic because only bearer has a format hint.
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
     * @evidence contracts/common.md#principled-implementation The `oauth2` type with a required flow set and an optional metadata discovery URL.
     * @evidence contracts/common.md#clear-and-simple-design One record; flow records are in the namespace.
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
       * @evidence contracts/common.md#principled-implementation Each flow is optional, and Omit removes the URL that the flow does not use: no token URL for implicit and no authorization URL for password and client credentials; device authorization has its own record.
       * @evidence contracts/common.md#clear-and-simple-design One record with Omit used so the shared flow shape is not repeated.
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
       * @evidence contracts/common.md#principled-implementation Authorization, token and refresh URLs and scopes are all optional, since which are required depends on the flow and the flow set removes the unused ones.
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
       * @evidence contracts/common.md#principled-implementation The device authorization URL and token URL are required and refresh URL and scopes are optional, as the device grant needs both endpoints.
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
