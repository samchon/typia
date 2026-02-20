import { IJsonSchemaAttribute } from "../schema/IJsonSchemaAttribute";
import * as tags from "../tags";

/**
 * Swagger v2.0 definition.
 *
 */
export namespace SwaggerV2 {
  /** HTTP method of the operation. */
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
      description?: string;
    }
  }

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  /** Path item containing operations by HTTP method. */
  export interface IPath extends Partial<
    Record<Method, IOperation | undefined>
  > {
    /** Path-level parameters. */
    parameters?: Array<
      IOperation.IParameter | IJsonSchema.IReference<`#/parameters/${string}`>
    >;
  }

  /** API operation metadata. */
  export interface IOperation {
    /** Unique operation identifier. */
    operationId?: string;

    /** Operation parameters. */
    parameters?: Array<
      | IOperation.IParameter
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
  }
  export namespace IOperation {
    /** Operation parameter (general or body). */
    export type IParameter = IGeneralParameter | IBodyParameter;

    /** General parameter (path, query, header, formData). */
    export type IGeneralParameter = IJsonSchema & {
      name: string;
      in: string;
      description?: string;
    };

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
      example?: any;
    }
  }

  /* -----------------------------------------------------------
    DEFINITIONS
  ----------------------------------------------------------- */
  /** JSON Schema type for Swagger. */
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
    /** Boolean type. */
    export interface IBoolean
      extends
        Omit<IJsonSchemaAttribute.IBoolean, "examples">,
        __ISignificant<"boolean"> {
      /** Default value. */
      default?: boolean | null;

      /** Allowed values. */
      enum?: Array<boolean | null>;
    }

    /** Integer type. */
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
      multipleOf?: number & tags.Type<"uint64"> & tags.ExclusiveMinimum<0>;
    }

    /** Number (double) type. */
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

    /** String type. */
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

    /** Array type. */
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

    /** Object type. */
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
    export interface __IAttribute extends Omit<
      IJsonSchemaAttribute,
      "examples" | "writeOnly"
    > {
      /** Example values. */
      examples?: any[];
    }
  }

  /** Security scheme types. */
  export type ISecurityDefinition =
    | ISecurityDefinition.IApiKey
    | ISecurityDefinition.IBasic
    | ISecurityDefinition.IOauth2Implicit
    | ISecurityDefinition.IOauth2AccessCode
    | ISecurityDefinition.IOauth2Password
    | ISecurityDefinition.IOauth2Application;
  export namespace ISecurityDefinition {
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
      description?: string;
    }
  }
}
