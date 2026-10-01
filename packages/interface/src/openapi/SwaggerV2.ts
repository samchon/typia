import { IJsonSchemaAttribute } from "../schema/IJsonSchemaAttribute";
import * as tags from "../tags";

/**
 * Swagger v2.0 specification types.
 *
 * `SwaggerV2` contains TypeScript type definitions for Swagger v2.0 (OpenAPI
 * v2) documents. Used for parsing legacy Swagger specifications. For a
 * normalized format that unifies all OpenAPI versions, use {@link OpenApi}.
 *
 * Key differences from OpenAPI v3.x:
 *
 * - Uses `definitions` instead of `components.schemas`
 * - Body parameters use `in: "body"` with `schema` property
 * - No `requestBody`, `oneOf`, `anyOf`, or `nullable`
 * - Uses `host` + `basePath` instead of `servers`
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The namespace mirrors the Swagger 2.0 object model so a 2.0 document parses without loss: schema definitions at the top level, body parameters carrying `schema`, host and base path instead of servers, and schema unions only through `x-` extensions. The differences from 3.x are listed in the comment.
 * @evidence contracts/common.md#clear-and-simple-design One namespace with the same member layout as the 3.x namespaces, so the upgrader reads one self-contained set of types.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It describes an input format and performs no conversion; upgrade to the normalized form lives in the utils package.
 * @evidence contracts/common.md#meaningful-documentation The comment lists the main differences from OpenAPI 3.x and links the normalized type.
 */
export namespace SwaggerV2 {
  /**
   * HTTP method of the operation.
   *
   * @evidence contracts/common.md#principled-implementation The eight methods that a Swagger 2.0 path item can hold; `query` appears only in 3.2.
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

  /**
   * Transfer protocol supported by Swagger v2.
   *
   * @evidence contracts/common.md#principled-implementation The four transfer protocols that Swagger 2.0 allows, as a closed literal union.
   * @evidence contracts/common.md#clear-and-simple-design One alias used by the document and operation records.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A literal union.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment names the transfer protocols.
   */
  export type Scheme = "http" | "https" | "ws" | "wss";

  /* -----------------------------------------------------------
    DOCUMENTS
  ----------------------------------------------------------- */
  /**
   * Swagger document structure.
   *
   * @evidence contracts/common.md#principled-implementation The version is `2.0` or `2.0.${number}`, and every top-level section is optional, as in the 2.0 specification; reusable parameters and responses are top-level maps next to `definitions` and `securityDefinitions`.
   * @evidence contracts/common.md#clear-and-simple-design One flat record with metadata types in its namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment, naming the host, base path and the global consumed and produced types.
   */
  export interface IDocument {
    /** Swagger version. */
    swagger: "2.0" | `2.0.${number}`;

    /** API metadata. */
    info?: IDocument.IInfo;

    /** Host address. */
    host?: string;

    /** Base path for all operations. */
    basePath?: string;

    /** Transfer protocols supported by the API. */
    schemes?: Scheme[];

    /** Global content types consumed. */
    consumes?: string[];

    /** Global content types produced. */
    produces?: string[];

    /** Schema definitions. */
    definitions?: Record<string, IJsonSchema>;

    /** Reusable parameter definitions. */
    parameters?: Record<string, IOperation.IParameter>;

    /** Reusable response definitions. */
    responses?: Record<string, IOperation.IResponse>;

    /** Security scheme definitions. */
    securityDefinitions?: Record<string, ISecurityDefinition>;

    /** Global security requirements. */
    security?: Record<string, string[]>[];

    /** API paths and operations. */
    paths?: Record<string, IPath>;

    /** Tag definitions. */
    tags?: IDocument.ITag[];
  }
  export namespace IDocument {
    /**
     * API metadata.
     *
     * @evidence contracts/common.md#principled-implementation Title and version are required and the rest is optional, as in 2.0, which has no summary.
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
     * Contact information.
     *
     * @evidence contracts/common.md#principled-implementation All three fields are optional and the email carries the Format email tag.
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
     * @evidence contracts/common.md#principled-implementation A name with an optional URL, with no SPDX identifier because 2.0 lacks it.
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

    /**
     * Tag for grouping operations.
     *
     * @evidence contracts/common.md#principled-implementation A name with an optional description.
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
  }

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  /**
   * Path item containing operations by HTTP method.
   *
   * @evidence contracts/common.md#principled-implementation A partial method map with path-level parameters that may be inline or `$ref` to the top-level parameters, plus an `x-additionalOperations` extension that carries methods outside the 2.0 set when a newer document is downgraded.
   * @evidence contracts/common.md#clear-and-simple-design The reference alternative is a template-literal type.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The extension is a documented downgrade channel and not a special case for a consumer.
   * @evidence contracts/common.md#meaningful-documentation Each field has a comment and the extension explains its origin.
   */
  export interface IPath extends Partial<
    Record<Method, IOperation | undefined>
  > {
    /** Path-level parameters. */
    parameters?: Array<
      IOperation.IParameter | IJsonSchema.IReference<`#/parameters/${string}`>
    >;

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
   * @evidence contracts/common.md#principled-implementation Operations carry parameters and responses as inline or `$ref` forms, with two spellings of the parameter reference path, and per-operation schemes, consumed and produced types; there is no request body field because 2.0 uses a body parameter.
   * @evidence contracts/common.md#clear-and-simple-design One record with the parameter and response forms in its namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
   * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
   */
  export interface IOperation {
    /** Unique operation identifier. */
    operationId?: string;

    /** Operation parameters. */
    parameters?: Array<
      | IOperation.IParameter
      | IJsonSchema.IReference<`#/parameters/${string}`>
      | IJsonSchema.IReference<`#/definitions/parameters/${string}`>
    >;

    /** Response definitions by status code. */
    responses?: Record<
      string,
      | IOperation.IResponse
      | IJsonSchema.IReference<`#/definitions/responses/${string}`>
    >;

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

    /** Operation-specific transfer protocols. */
    schemes?: Scheme[];

    /** Operation-specific consumed content types. */
    consumes?: string[];

    /** Operation-specific produced content types. */
    produces?: string[];
  }
  export namespace IOperation {
    /**
     * Operation parameter (general or body).
     *
     * @evidence contracts/common.md#principled-implementation A parameter is either general or body, which separates the location-driven shape from the body shape and is how 2.0 distinguishes them.
     * @evidence contracts/common.md#clear-and-simple-design One alias of two named types.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A representation only.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment names the two kinds.
     */
    export type IParameter = IGeneralParameter | IBodyParameter;

    /**
     * General parameter (path, query, header, formData).
     *
     * @evidence contracts/common.md#principled-implementation The intersection combines a schema-or-file variant with the common name, location and description, where location is a string because the specification's values vary by kind. A file parameter has type `file`.
     * @evidence contracts/common.md#clear-and-simple-design The common fields are an intersection and the two variants are in the namespace, so the shared part is stated once.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A representation only; the location is not narrowed to the permitted words.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment lists the locations that this kind covers.
     */
    export type IGeneralParameter = (
      | IGeneralParameter.ISchema
      | IGeneralParameter.IFile
    ) & {
      name: string;
      in: string;
      description?: string;
    };
    export namespace IGeneralParameter {
      /**
       * Non-body parameter schema with parameter-level requiredness.
       *
       * @evidence contracts/common.md#principled-implementation A conditional type adds parameter-level required to the chosen schema; for an object schema, whose own `required` is a list of property names, it replaces that with a boolean or list, which is how a 2.0 form parameter can be either.
       * @evidence contracts/common.md#clear-and-simple-design One generic alias with a single conditional.
       * @evidence contracts/common.md#prohibited-implementation-shortcuts A type-level mapping; no runtime behavior.
       * @evidence contracts/common.md#meaningful-documentation The one-line comment says it is a non-body parameter schema with parameter-level requiredness.
       */
      export type ISchema<Schema extends IJsonSchema = IJsonSchema> =
        Schema extends IJsonSchema.IObject
          ? Omit<Schema, "required"> & { required?: boolean | string[] }
          : Schema & { required?: boolean };

      /**
       * File uploaded through a form-data request.
       *
       * @evidence contracts/common.md#principled-implementation A literal type `file` and an optional required flag express the form-data upload that 2.0 supports.
       * @evidence contracts/common.md#clear-and-simple-design Two fields.
       * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
       * @evidence contracts/common.md#meaningful-documentation The one-line comment says it is a file uploaded through a form-data request.
       */
      export interface IFile {
        type: "file";
        required?: boolean;
      }
    }

    /**
     * Body parameter.
     *
     * @evidence contracts/common.md#principled-implementation The body parameter has a required schema, name and location, with required optional; its `in` is typed as string though it is always the word body.
     * @evidence contracts/common.md#clear-and-simple-design A separate record from the general parameter because the schema is mandatory.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record; the location string is not narrowed in the declaration.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment, with the location noted as always body.
     */
    export interface IBodyParameter {
      /** Body schema. */
      schema: IJsonSchema;

      /** Parameter name. */
      name: string;

      /** Parameter location (always "body"). */
      in: string;

      /** Parameter description. */
      description?: string;

      /** Whether required. */
      required?: boolean;
    }

    /**
     * Response definition.
     *
     * @evidence contracts/common.md#principled-implementation A response has an optional description, headers, schema and examples keyed by MIME type, plus a deprecated singular `example` retained for documents that use the non-standard spelling.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts The deprecated field is documented as legacy and it points to its replacement.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment and the deprecated field states the standard alternative.
     */
    export interface IResponse {
      /** Response description. */
      description?: string;

      /** Response headers. */
      headers?: Record<string, IJsonSchema>;

      /** Response body schema. */
      schema?: IJsonSchema;

      /** Example values keyed by MIME type. */
      examples?: Record<string, any>;

      /**
       * Legacy non-standard example value.
       *
       * @deprecated Swagger v2 response examples are keyed by MIME type in
       *   {@link examples}.
       */
      example?: any;
    }
  }

  /* -----------------------------------------------------------
    DEFINITIONS
  ----------------------------------------------------------- */
  /**
   * JSON Schema type for Swagger.
   *
   * @evidence contracts/common.md#principled-implementation A union of variants, now including the allOf composition that the upgrader already reads, discriminated by `type`, `$ref`, `allOf` and the `x-` union keys, so the nullable and union features that 2.0 lacks are represented only by extension keys that real tools emit.
   * @evidence contracts/common.md#clear-and-simple-design One alias over variants in the same-named namespace.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It represents the input form and does not normalize it.
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
     * @evidence contracts/common.md#principled-implementation The boolean variant takes the attribute record without `examples`, the type discriminator through the helper, and optional default and enum that may include null.
     * @evidence contracts/common.md#clear-and-simple-design Two optional fields.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IBoolean
      extends
        Omit<IJsonSchemaAttribute.IBoolean, "examples">,
        __ISignificant<"boolean"> {
      /** Default value. */
      default?: boolean | null;

      /** Allowed values. */
      enum?: Array<boolean | null>;
    }

    /**
     * Integer type.
     *
     * @evidence contracts/common.md#principled-implementation Integer keywords with int64 numbers for defaults, bounds and enum, and exclusive bounds that may be numbers or the 2.0 boolean flags.
     * @evidence contracts/common.md#clear-and-simple-design Optional keywords on the integer attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IInteger
      extends
        Omit<IJsonSchemaAttribute.IInteger, "examples">,
        __ISignificant<"integer"> {
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
     * @evidence contracts/common.md#principled-implementation Number keywords with exclusive bounds as numbers or booleans and multipleOf above zero.
     * @evidence contracts/common.md#clear-and-simple-design Optional keywords on the number attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface INumber
      extends
        Omit<IJsonSchemaAttribute.INumber, "examples">,
        __ISignificant<"number"> {
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
     * @evidence contracts/common.md#principled-implementation String keywords with format as the known set or any string, pattern and unsigned length bounds; there are no content keywords because 2.0 lacks them.
     * @evidence contracts/common.md#clear-and-simple-design Optional keywords on the string attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that does not validate pattern or format.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IString
      extends
        Omit<IJsonSchemaAttribute.IString, "examples">,
        __ISignificant<"string"> {
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
     * @evidence contracts/common.md#principled-implementation A required items schema with uniqueness and unsigned size bounds; arrays are homogeneous in 2.0.
     * @evidence contracts/common.md#clear-and-simple-design Optional fields on the array attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IArray
      extends
        Omit<IJsonSchemaAttribute.IArray, "examples">,
        __ISignificant<"array"> {
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
     * @evidence contracts/common.md#principled-implementation Properties, required names, additional properties and property-count bounds, all optional.
     * @evidence contracts/common.md#clear-and-simple-design Optional fields on the object attribute record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IObject
      extends
        Omit<IJsonSchemaAttribute.IObject, "examples">,
        __ISignificant<"object"> {
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
     * All-of combination.
     *
     * @evidence contracts/common.md#principled-implementation A list of schemas that must all match, the only composition keyword that 2.0 defines.
     * @evidence contracts/common.md#clear-and-simple-design One field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that does not merge.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment names the combination.
     */
    export interface IAllOf extends __IAttribute {
      /** Schemas to combine. */
      allOf: IJsonSchema[];
    }

    /**
     * Any-of union (Swagger extension).
     *
     * @evidence contracts/common.md#principled-implementation The union is the key `x-anyOf`, because 2.0 has no `anyOf`; the vendor extension is what documents from some generators use.
     * @evidence contracts/common.md#clear-and-simple-design One field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that records an extension and does not add one.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment names the union as a Swagger extension.
     */
    export interface IAnyOf extends __IAttribute {
      /** Union member schemas. */
      "x-anyOf": IJsonSchema[];
    }

    /**
     * One-of union (Swagger extension).
     *
     * @evidence contracts/common.md#principled-implementation The union is the key `x-oneOf`, because 2.0 has no `oneOf`.
     * @evidence contracts/common.md#clear-and-simple-design One field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record that records an extension and does not add one.
     * @evidence contracts/common.md#meaningful-documentation The one-line comment names the union as a Swagger extension.
     */
    export interface IOneOf extends __IAttribute {
      /** Union member schemas. */
      "x-oneOf": IJsonSchema[];
    }

    /**
     * Null type.
     *
     * @evidence contracts/common.md#principled-implementation A null type with an optional null default, since 2.0 has no null type of its own and uses the type word only as an extension.
     * @evidence contracts/common.md#clear-and-simple-design Two fields.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation The comment names the type discriminator and default.
     */
    export interface INullOnly extends __IAttribute {
      /** Type discriminator. */
      type: "null";

      /** Default value. */
      default?: null;
    }

    /**
     * Unknown type.
     *
     * @evidence contracts/common.md#principled-implementation A schema with an absent type, representing an unconstrained value.
     * @evidence contracts/common.md#clear-and-simple-design One optional field.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation The comment says the type is undefined for unknown.
     */
    export interface IUnknown extends __IAttribute {
      /** Type discriminator (undefined for unknown). */
      type?: undefined;
    }

    /** @ignore Base Interface with type discriminator. */
    export interface __ISignificant<Type extends string> extends __IAttribute {
      /** Type discriminator. */
      type: Type;

      /** Nullable flag (Swagger extension). */
      "x-nullable"?: boolean;
    }

    /** @ignore Base Attribute interface. */
    export interface __IAttribute extends Omit<
      IJsonSchemaAttribute,
      "examples" | "writeOnly"
    > {
      /** Example values. */
      examples?: any[];
    }
  }

  /**
   * Security scheme types.
   *
   * @evidence contracts/common.md#principled-implementation A union of six definitions discriminated by `type` and, for oauth2, by `flow`, so each flow has only the URLs it uses.
   * @evidence contracts/common.md#clear-and-simple-design One alias over six records.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A representation; no secrets or checks.
   * @evidence contracts/common.md#meaningful-documentation The one-line comment names the security scheme types.
   */
  export type ISecurityDefinition =
    | ISecurityDefinition.IApiKey
    | ISecurityDefinition.IBasic
    | ISecurityDefinition.IOauth2Implicit
    | ISecurityDefinition.IOauth2AccessCode
    | ISecurityDefinition.IOauth2Password
    | ISecurityDefinition.IOauth2Application;
  export namespace ISecurityDefinition {
    /**
     * API key authentication.
     *
     * @evidence contracts/common.md#principled-implementation The `apiKey` definition with optional location and name.
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
     * @evidence contracts/common.md#principled-implementation The `basic` definition, which is HTTP basic authentication in 2.0 and has an optional name.
     * @evidence contracts/common.md#clear-and-simple-design One record.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IBasic {
      /** Scheme type. */
      type: "basic";

      /** Scheme name. */
      name?: string;

      /** Scheme description. */
      description?: string;
    }

    /**
     * OAuth2 implicit flow.
     *
     * @evidence contracts/common.md#principled-implementation The oauth2 type with the literal flow `implicit`, an authorization URL and scopes, and no token URL since the implicit grant has no token endpoint.
     * @evidence contracts/common.md#clear-and-simple-design A separate record per flow so the URLs match the flow.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IOauth2Implicit {
      /** Scheme type. */
      type: "oauth2";

      /** OAuth2 flow type. */
      flow: "implicit";

      /** Authorization URL. */
      authorizationUrl?: string;

      /** Available scopes. */
      scopes?: Record<string, string>;

      /** Scheme description. */
      description?: string;
    }

    /**
     * OAuth2 authorization code flow.
     *
     * @evidence contracts/common.md#principled-implementation The oauth2 type with the literal flow `accessCode`, with both an authorization URL and a token URL.
     * @evidence contracts/common.md#clear-and-simple-design A separate record per flow.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IOauth2AccessCode {
      /** Scheme type. */
      type: "oauth2";

      /** OAuth2 flow type. */
      flow: "accessCode";

      /** Authorization URL. */
      authorizationUrl?: string;

      /** Token URL. */
      tokenUrl?: string;

      /** Available scopes. */
      scopes?: Record<string, string>;

      /** Scheme description. */
      description?: string;
    }

    /**
     * OAuth2 password flow.
     *
     * @evidence contracts/common.md#principled-implementation The oauth2 type with the literal flow `password` and a token URL only.
     * @evidence contracts/common.md#clear-and-simple-design A separate record per flow.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IOauth2Password {
      /** Scheme type. */
      type: "oauth2";

      /** OAuth2 flow type. */
      flow: "password";

      /** Token URL. */
      tokenUrl?: string;

      /** Available scopes. */
      scopes?: Record<string, string>;

      /** Scheme description. */
      description?: string;
    }

    /**
     * OAuth2 application (client credentials) flow.
     *
     * @evidence contracts/common.md#principled-implementation The oauth2 type with the literal flow `application`, the client credentials grant, and a token URL only.
     * @evidence contracts/common.md#clear-and-simple-design A separate record per flow.
     * @evidence contracts/common.md#prohibited-implementation-shortcuts A data record.
     * @evidence contracts/common.md#meaningful-documentation Each field has a one-line comment.
     */
    export interface IOauth2Application {
      /** Scheme type. */
      type: "oauth2";

      /** OAuth2 flow type. */
      flow: "application";

      /** Token URL. */
      tokenUrl?: string;

      /** Available scopes. */
      scopes?: Record<string, string>;

      /** Scheme description. */
      description?: string;
    }
  }
}
