import { IJsonSchemaAttribute } from "../schema/IJsonSchemaAttribute";
<<<<<<< HEAD

/**
 * Swagger v2.0 definition.
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace SwaggerV2 {
<<<<<<< HEAD
=======
  /** HTTP method of the operation. */
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

  /* -----------------------------------------------------------
    DOCUMENTS
  ----------------------------------------------------------- */
<<<<<<< HEAD
  export interface IDocument {
    swagger: "2.0" | `2.0.${number}`;
    info?: IDocument.IInfo;
    host?: string;
    basePath?: string;
    consumes?: string[];
    produces?: string[];
    definitions?: Record<string, IJsonSchema>;
    parameters?: Record<string, IOperation.IParameter>;
    responses?: Record<string, IOperation.IResponse>;
    securityDefinitions?: Record<string, ISecurityDefinition>;
    security?: Record<string, string[]>[];
    paths?: Record<string, IPath>;
    tags?: IDocument.ITag[];
  }
  export namespace IDocument {
    export interface IInfo {
      title: string;
      description?: string;
      termsOfService?: string;
      contact?: IContact;
      license?: ILicense;
      version: string;
    }
    export interface IContact {
      name?: string;
      url?: string;
      email?: string;
    }
    export interface ILicense {
      name: string;
      url?: string;
    }
    export interface ITag {
      name: string;
=======
  /** Swagger document structure. */
  export interface IDocument {
    /** Swagger version. */
    swagger: "2.0" | `2.0.${number}`;

    /** API metadata. */
    info?: IDocument.IInfo;

    /** Host address. */
    host?: string;

    /** Base path for all operations. */
    basePath?: string;

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
    /** API metadata. */
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

      /** License URL. */
      url?: string;
    }

    /** Tag for grouping operations. */
    export interface ITag {
      /** Tag name. */
      name: string;

      /** Tag description. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
      description?: string;
    }
  }

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
<<<<<<< HEAD
  export interface IPath extends Partial<
    Record<Method, IOperation | undefined>
  > {
=======
  /** Path item containing operations by HTTP method. */
  export interface IPath extends Partial<
    Record<Method, IOperation | undefined>
  > {
    /** Path-level parameters. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    parameters?: Array<
      IOperation.IParameter | IJsonSchema.IReference<`#/parameters/${string}`>
    >;
  }

<<<<<<< HEAD
  export interface IOperation {
    operationId?: string;
=======
  /** API operation metadata. */
  export interface IOperation {
    /** Unique operation identifier. */
    operationId?: string;

    /** Operation parameters. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    parameters?: Array<
      | IOperation.IParameter
      | IJsonSchema.IReference<`#/definitions/parameters/${string}`>
    >;
<<<<<<< HEAD
=======

    /** Response definitions by status code. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    responses?: Record<
      string,
      | IOperation.IResponse
      | IJsonSchema.IReference<`#/definitions/responses/${string}`>
    >;
<<<<<<< HEAD
    summary?: string;
    description?: string;
    security?: Record<string, string[]>[];
    tags?: string[];
    deprecated?: boolean;
  }
  export namespace IOperation {
    export type IParameter = IGeneralParameter | IBodyParameter;
=======

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
    /** Operation parameter (general or body). */
    export type IParameter = IGeneralParameter | IBodyParameter;

    /** General parameter (path, query, header, formData). */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    export type IGeneralParameter = IJsonSchema & {
      name: string;
      in: string;
      description?: string;
    };
<<<<<<< HEAD
    export interface IBodyParameter {
      schema: IJsonSchema;
      name: string;
      in: string;
      description?: string;
      required?: boolean;
    }
    export interface IResponse {
      description?: string;
      headers?: Record<string, IJsonSchema>;
      schema?: IJsonSchema;
=======

    /** Body parameter. */
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

    /** Response definition. */
    export interface IResponse {
      /** Response description. */
      description?: string;

      /** Response headers. */
      headers?: Record<string, IJsonSchema>;

      /** Response body schema. */
      schema?: IJsonSchema;

      /** Example value. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
      example?: any;
    }
  }

  /* -----------------------------------------------------------
    DEFINITIONS
  ----------------------------------------------------------- */
<<<<<<< HEAD
=======
  /** JSON Schema type for Swagger. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  export type IJsonSchema =
    | IJsonSchema.IBoolean
    | IJsonSchema.IInteger
    | IJsonSchema.INumber
    | IJsonSchema.IString
    | IJsonSchema.IArray
    | IJsonSchema.IObject
    | IJsonSchema.IReference
    | IJsonSchema.IAnyOf
    | IJsonSchema.IOneOf
    | IJsonSchema.INullOnly
    | IJsonSchema.IUnknown;
  export namespace IJsonSchema {
<<<<<<< HEAD
=======
    /** Boolean type. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    export interface IBoolean
      extends
        Omit<IJsonSchemaAttribute.IBoolean, "examples">,
        __ISignificant<"boolean"> {
<<<<<<< HEAD
      default?: boolean | null;
      enum?: Array<boolean | null>;
    }
=======
      /** Default value. */
      default?: boolean | null;

      /** Allowed values. */
      enum?: Array<boolean | null>;
    }

    /** Integer type. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    export interface IInteger
      extends
        Omit<IJsonSchemaAttribute.IInteger, "examples">,
        __ISignificant<"integer"> {
<<<<<<< HEAD
      /** @type int64 */ default?: number | null;
      /** @type int64 */ enum?: Array<number | null>;
      /** @type int64 */ minimum?: number;
      /** @type int64 */ maximum?: number;
      exclusiveMinimum?: number | boolean;
      exclusiveMaximum?: number | boolean;
      /**
       * @type uint64
       * @exclusiveMinimum 0
       */
      multipleOf?: number;
    }
=======
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

    /** Number (double) type. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    export interface INumber
      extends
        Omit<IJsonSchemaAttribute.INumber, "examples">,
        __ISignificant<"number"> {
<<<<<<< HEAD
      default?: number | null;
      enum?: Array<number | null>;
      minimum?: number;
      maximum?: number;
      exclusiveMinimum?: number | boolean;
      exclusiveMaximum?: number | boolean;
      /** @exclusiveMinimum 0 */ multipleOf?: number;
    }
=======
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

    /** String type. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    export interface IString
      extends
        Omit<IJsonSchemaAttribute.IString, "examples">,
        __ISignificant<"string"> {
<<<<<<< HEAD
      default?: string | null;
      enum?: Array<string | null>;
=======
      /** Default value. */
      default?: string | null;

      /** Allowed values. */
      enum?: Array<string | null>;

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
      pattern?: string;
      /** @type uint64 */ minLength?: number;
      /** @type uint64 */ maxLength?: number;
    }

=======

      /** Regex pattern. */
      pattern?: string;

      /** Minimum length. */
      minLength?: number & tags.Type<"uint64">;

      /** Maximum length. */
      maxLength?: number & tags.Type<"uint64">;
    }

    /** Array type. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    export interface IArray
      extends
        Omit<IJsonSchemaAttribute.IArray, "examples">,
        __ISignificant<"array"> {
<<<<<<< HEAD
      items: IJsonSchema;
      uniqueItems?: boolean;
      /** @type uint64 */ minItems?: number;
      /** @type uint64 */ maxItems?: number;
    }
=======
      /** Element type. */
      items: IJsonSchema;

      /** Whether elements must be unique. */
      uniqueItems?: boolean;

      /** Minimum items. */
      minItems?: number & tags.Type<"uint64">;

      /** Maximum items. */
      maxItems?: number & tags.Type<"uint64">;
    }

    /** Object type. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    export interface IObject
      extends
        Omit<IJsonSchemaAttribute.IObject, "examples">,
        __ISignificant<"object"> {
<<<<<<< HEAD
      properties?: Record<string, IJsonSchema>;
      required?: string[];
      additionalProperties?: boolean | IJsonSchema;
      maxProperties?: number;
      minProperties?: number;
    }
    export interface IReference<Key = string> extends __IAttribute {
      $ref: Key;
    }

    export interface IAllOf extends __IAttribute {
      allOf: IJsonSchema[];
    }
    export interface IAnyOf extends __IAttribute {
      "x-anyOf": IJsonSchema[];
    }
    export interface IOneOf extends __IAttribute {
      "x-oneOf": IJsonSchema[];
    }

    export interface INullOnly extends __IAttribute {
      type: "null";
      default?: null;
    }
    export interface IUnknown extends __IAttribute {
      type?: undefined;
    }

    export interface __ISignificant<Type extends string> extends __IAttribute {
      type: Type;
      "x-nullable"?: boolean;
    }
=======
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

    /** Reference to a named schema. */
    export interface IReference<Key = string> extends __IAttribute {
      /** Reference path. */
      $ref: Key;
    }

    /** All-of combination. */
    export interface IAllOf extends __IAttribute {
      /** Schemas to combine. */
      allOf: IJsonSchema[];
    }

    /** Any-of union (Swagger extension). */
    export interface IAnyOf extends __IAttribute {
      /** Union member schemas. */
      "x-anyOf": IJsonSchema[];
    }

    /** One-of union (Swagger extension). */
    export interface IOneOf extends __IAttribute {
      /** Union member schemas. */
      "x-oneOf": IJsonSchema[];
    }

    /** Null type. */
    export interface INullOnly extends __IAttribute {
      /** Type discriminator. */
      type: "null";

      /** Default value. */
      default?: null;
    }

    /** Unknown type. */
    export interface IUnknown extends __IAttribute {
      /** Type discriminator (undefined for unknown). */
      type?: undefined;
    }

    /** @internal Base interface with type discriminator. */
    export interface __ISignificant<Type extends string> extends __IAttribute {
      /** Type discriminator. */
      type: Type;

      /** Nullable flag (Swagger extension). */
      "x-nullable"?: boolean;
    }

    /** @internal Base attribute interface. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    export interface __IAttribute extends Omit<
      IJsonSchemaAttribute,
      "examples" | "writeOnly"
    > {
<<<<<<< HEAD
=======
      /** Example values. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
      examples?: any[];
    }
  }

<<<<<<< HEAD
=======
  /** Security scheme types. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
  export type ISecurityDefinition =
    | ISecurityDefinition.IApiKey
    | ISecurityDefinition.IBasic
    | ISecurityDefinition.IOauth2Implicit
    | ISecurityDefinition.IOauth2AccessCode
    | ISecurityDefinition.IOauth2Password
    | ISecurityDefinition.IOauth2Application;
  export namespace ISecurityDefinition {
<<<<<<< HEAD
    export interface IApiKey {
      type: "apiKey";
      in?: "header" | "query" | "cookie";
      name?: string;
      description?: string;
    }
    export interface IBasic {
      type: "basic";
      name?: string;
      description?: string;
    }

    export interface IOauth2Implicit {
      type: "oauth2";
      flow: "implicit";
      authorizationUrl?: string;
      scopes?: Record<string, string>;
      description?: string;
    }
    export interface IOauth2AccessCode {
      type: "oauth2";
      flow: "accessCode";
      authorizationUrl?: string;
      tokenUrl?: string;
      scopes?: Record<string, string>;
      description?: string;
    }
    export interface IOauth2Password {
      type: "oauth2";
      flow: "password";
      tokenUrl?: string;
      scopes?: Record<string, string>;
      description?: string;
    }
    export interface IOauth2Application {
      type: "oauth2";
      flow: "application";
      tokenUrl?: string;
      scopes?: Record<string, string>;
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
    export interface IBasic {
      /** Scheme type. */
      type: "basic";

      /** Scheme name. */
      name?: string;

      /** Scheme description. */
      description?: string;
    }

    /** OAuth2 implicit flow. */
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

    /** OAuth2 authorization code flow. */
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

    /** OAuth2 password flow. */
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

    /** OAuth2 application (client credentials) flow. */
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
      description?: string;
    }
  }
}
