import { IJsonSchemaAttribute } from "../schema/IJsonSchemaAttribute";
<<<<<<< HEAD

/**
 * OpenAPI v3.1 definition.
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace OpenApiV3_1 {
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
    openapi: `3.1.${number}`;
    servers?: IServer[];
    info?: IDocument.IInfo;
    components?: IComponents;
    paths?: Record<string, IPath>;
=======
  /** OpenAPI document structure. */
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    webhooks?: Record<
      string,
      IJsonSchema.IReference<`#/components/pathItems/${string}`> | IPath
    >;
<<<<<<< HEAD
    security?: Record<string, string[]>[];
    tags?: IDocument.ITag[];
  }
  export namespace IDocument {
    export interface IInfo {
      title: string;
      summary?: string;
      description?: string;
      termsOfService?: string;
      contact?: IContact;
      license?: ILicense;
      version: string;
    }
    export interface ITag {
      name: string;
      description?: string;
    }
    export interface IContact {
      name?: string;
      url?: string;
      email?: string;
    }
    export interface ILicense {
      name: string;
      identifier?: string;
=======

    /** Global security requirements. */
    security?: Record<string, string[]>[];

    /** Tag definitions. */
    tags?: IDocument.ITag[];
  }
  export namespace IDocument {
    /** API metadata. */
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
  export interface IServer {
    url: string;
    description?: string;
    variables?: Record<string, IServer.IVariable>;
  }
  export namespace IServer {
    export interface IVariable {
      default: string;
      /** @minItems 1 */ enum?: string[];
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

      /** Allowed values. @minItems 1 */
      enum?: string[];

      /** Variable description. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
      description?: string;
    }
  }

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
<<<<<<< HEAD
  export interface IPath extends Partial<Record<Method, IOperation>> {
=======
  /** Path item containing operations by HTTP method. */
  export interface IPath extends Partial<Record<Method, IOperation>> {
    /** Path-level parameters. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    parameters?: Array<
      | IOperation.IParameter
      | IJsonSchema.IReference<`#/components/headers/${string}`>
      | IJsonSchema.IReference<`#/components/parameters/${string}`>
    >;
<<<<<<< HEAD
    servers?: IServer[];
    summary?: string;
    description?: string;
  }

  export interface IOperation {
    operationId?: string;
=======

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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    parameters?: Array<
      | IOperation.IParameter
      | IJsonSchema.IReference<`#/components/headers/${string}`>
      | IJsonSchema.IReference<`#/components/parameters/${string}`>
    >;
<<<<<<< HEAD
    requestBody?:
      | IOperation.IRequestBody
      | IJsonSchema.IReference<`#/components/requestBodies/${string}`>;
=======

    /** Request body. */
    requestBody?:
      | IOperation.IRequestBody
      | IJsonSchema.IReference<`#/components/requestBodies/${string}`>;

    /** Response definitions by status code. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    responses?: Record<
      string,
      | IOperation.IResponse
      | IJsonSchema.IReference<`#/components/responses/${string}`>
    >;
<<<<<<< HEAD
    servers?: IServer[];
    summary?: string;
    description?: string;
    security?: Record<string, string[]>[];
    tags?: string[];
    deprecated?: boolean;
  }
  export namespace IOperation {
    export interface IParameter {
      name?: string;
      in: "path" | "query" | "header" | "cookie";
      schema: IJsonSchema;
      required?: boolean;
      description?: string;
      example?: any;
=======

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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
      examples?: Record<
        string,
        IExample | IJsonSchema.IReference<`#/components/examples/${string}`>
      >;
    }
<<<<<<< HEAD
    export interface IRequestBody {
      description?: string;
      required?: boolean;
      content?: Record<string, IMediaType>;
    }
    export interface IResponse {
      content?: Record<string, IMediaType>;
=======

    /** Request body. */
    export interface IRequestBody {
      /** Body description. */
      description?: string;

      /** Whether required. */
      required?: boolean;

      /** Body content by media type. */
      content?: Record<string, IMediaType>;
    }

    /** Response definition. */
    export interface IResponse {
      /** Response content by media type. */
      content?: Record<string, IMediaType>;

      /** Response headers. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
      headers?: Record<
        string,
        | Omit<IOperation.IParameter, "in">
        | IJsonSchema.IReference<`#/components/headers/${string}`>
      >;
<<<<<<< HEAD
      description?: string;
    }
    export interface IMediaType {
      schema?: IJsonSchema;
      example?: any;
=======

      /** Response description. */
      description?: string;
    }

    /** Media type definition. */
    export interface IMediaType {
      /** Content schema. */
      schema?: IJsonSchema;

      /** Example value. */
      example?: any;

      /** Named examples. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
      examples?: Record<
        string,
        IExample | IJsonSchema.IReference<`#/components/examples/${string}`>
      >;
    }
  }

<<<<<<< HEAD
  export interface IExample {
    summary?: string;
    description?: string;
    value?: any;
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    externalValue?: string;
  }

  /* -----------------------------------------------------------
    SCHEMA DEFINITIONS
  ----------------------------------------------------------- */
<<<<<<< HEAD
  export interface IComponents {
    schemas?: Record<string, IJsonSchema>;
    pathItems?: Record<string, IPath>;
    responses?: Record<string, IOperation.IResponse>;
    parameters?: Record<string, IOperation.IParameter>;
    requestBodies?: Record<string, IOperation.IRequestBody>;
    securitySchemes?: Record<string, ISecurityScheme>;
    headers?: Record<string, Omit<IOperation.IParameter, "in">>;
    examples?: Record<string, IExample>;
  }

=======
  /** Reusable components storage. */
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

  /** JSON Schema type for OpenAPI v3.1. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
<<<<<<< HEAD
=======
    /** Mixed type (multiple types in array). */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
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
<<<<<<< HEAD
=======
      /** Array of type discriminators. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
      type: Array<
        | "boolean"
        | "integer"
        | "number"
        | "string"
        | "array"
        | "object"
        | "null"
      >;
<<<<<<< HEAD
      default?: any[] | null;
      enum?: any[];
    }

    export interface IConstant extends __IAttribute {
      const: boolean | number | string;
      nullable?: boolean;
    }
    export interface IBoolean
      extends Omit<IJsonSchemaAttribute.IBoolean, "examples">, __IAttribute {
      nullable?: boolean;
      default?: boolean | null;
      enum?: Array<boolean | null>;
    }
    export interface IInteger
      extends Omit<IJsonSchemaAttribute.IInteger, "examples">, __IAttribute {
      nullable?: boolean;
      /** @type int64 */ default?: number | null;
      /** @type int64 */ enum?: Array<number | null>;
      /** @type int64 */ minimum?: number;
      /** @type int64 */ maximum?: number;
      /** @type int64 */ exclusiveMinimum?: number | boolean;
      /** @type int64 */ exclusiveMaximum?: number | boolean;
      /**
       * @type uint64
       * @exclusiveMinimum 0
       */
      multipleOf?: number;
    }
    export interface INumber
      extends Omit<IJsonSchemaAttribute.INumber, "examples">, __IAttribute {
      nullable?: boolean;
      default?: number | null;
      enum?: Array<number | null>;
      minimum?: number;
      maximum?: number;
      exclusiveMinimum?: number | boolean;
      exclusiveMaximum?: number | boolean;
      /** @exclusiveMinimum 0 */ multipleOf?: number;
    }
    export interface IString
      extends Omit<IJsonSchemaAttribute.IString, "examples">, __IAttribute {
      nullable?: boolean;
      default?: string | null;
      enum?: Array<string | null>;
=======

      /** Default value. */
      default?: any[] | null;

      /** Allowed values. */
      enum?: any[];
    }

    /** Constant value type. */
    export interface IConstant extends __IAttribute {
      /** Constant value. */
      const: boolean | number | string;

      /** Whether nullable. */
      nullable?: boolean;
    }

    /** Boolean type. */
    export interface IBoolean
      extends Omit<IJsonSchemaAttribute.IBoolean, "examples">, __IAttribute {
      /** Whether nullable. */
      nullable?: boolean;

      /** Default value. */
      default?: boolean | null;

      /** Allowed values. */
      enum?: Array<boolean | null>;
    }

    /** Integer type. */
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

    /** Number (double) type. */
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

    /** String type. */
    export interface IString
      extends Omit<IJsonSchemaAttribute.IString, "examples">, __IAttribute {
      /** Whether nullable. */
      nullable?: boolean;

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
      contentMediaType?: string;
      /** @type uint64 */ minLength?: number;
      /** @type uint64 */ maxLength?: number;
    }

    export interface IObject
      extends Omit<IJsonSchemaAttribute.IObject, "examples">, __IAttribute {
      nullable?: boolean;
      properties?: Record<string, IJsonSchema>;
      required?: string[];
      additionalProperties?: boolean | IJsonSchema;
      maxProperties?: number;
      minProperties?: number;
    }
    export interface IArray
      extends Omit<IJsonSchemaAttribute.IArray, "examples">, __IAttribute {
      nullable?: boolean;
      items?: IJsonSchema | IJsonSchema[];
      prefixItems?: IJsonSchema[];
      uniqueItems?: boolean;
      additionalItems?: boolean | IJsonSchema;
      /** @type uint64 */ minItems?: number;
      /** @type uint64 */ maxItems?: number;
    }
    export interface IReference<Key = string> extends __IAttribute {
      $ref: Key;
    }
    export interface IRecursiveReference extends __IAttribute {
      $recursiveRef: string;
    }

    export interface IAllOf extends __IAttribute {
      allOf: IJsonSchema[];
    }
    export interface IAnyOf extends __IAttribute {
      anyOf: IJsonSchema[];
    }
    export interface IOneOf extends __IAttribute {
      oneOf: IJsonSchema[];
      discriminator?: IOneOf.IDiscriminator;
    }
    export namespace IOneOf {
      export interface IDiscriminator {
        propertyName: string;
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

    /** Object type. */
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

    /** Array type. */
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

    /** Reference to a named schema. */
    export interface IReference<Key = string> extends __IAttribute {
      /** Reference path. */
      $ref: Key;
    }

    /** Recursive reference. */
    export interface IRecursiveReference extends __IAttribute {
      /** Recursive reference path. */
      $recursiveRef: string;
    }

    /** All-of combination. */
    export interface IAllOf extends __IAttribute {
      /** Schemas to combine. */
      allOf: IJsonSchema[];
    }

    /** Any-of union. */
    export interface IAnyOf extends __IAttribute {
      /** Union member schemas. */
      anyOf: IJsonSchema[];
    }

    /** One-of union. */
    export interface IOneOf extends __IAttribute {
      /** Union member schemas. */
      oneOf: IJsonSchema[];

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

<<<<<<< HEAD
    export interface INull
      extends Omit<IJsonSchemaAttribute.INull, "examples">, __IAttribute {
      default?: null;
    }
    export interface IUnknown
      extends Omit<IJsonSchemaAttribute.IUnknown, "examples">, __IAttribute {
      type?: undefined;
      default?: any;
    }

=======
    /** Null type. */
    export interface INull
      extends Omit<IJsonSchemaAttribute.INull, "examples">, __IAttribute {
      /** Default value. */
      default?: null;
    }

    /** Unknown type. */
    export interface IUnknown
      extends Omit<IJsonSchemaAttribute.IUnknown, "examples">, __IAttribute {
      /** Type discriminator (undefined for unknown). */
      type?: undefined;

      /** Default value. */
      default?: any;
    }

    /** @internal Base attribute interface. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    export interface __IAttribute extends Omit<
      IJsonSchemaAttribute,
      "examples"
    > {
<<<<<<< HEAD
=======
      /** Example values. */
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
      examples?: any[] | Record<string, any>;
    }
  }

<<<<<<< HEAD
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
    export interface IApiKey {
      type: "apiKey";
      in?: "header" | "query" | "cookie";
      name?: string;
      description?: string;
    }
    export interface IHttpBasic {
      type: "http";
      scheme: "basic";
      description?: string;
    }
    export interface IHttpBearer {
      type: "http";
      scheme: "bearer";
      bearerFormat?: string;
      description?: string;
    }
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
