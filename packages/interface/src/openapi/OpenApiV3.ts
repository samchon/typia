import { IJsonSchemaAttribute } from "../schema/IJsonSchemaAttribute";
import * as tags from "../tags";

/**
 * OpenAPI 3.0 definition.
 *
 */
export namespace OpenApiV3 {
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
  /** OpenAPI document structure. */
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

      /** License URL. */
      url?: string;
    }
  }

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
      description?: string;
    }
  }

  /* -----------------------------------------------------------
    PATH ITEMS
  ----------------------------------------------------------- */
  /** Path item containing operations by HTTP method. */
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
  }

  /** API operation metadata. */
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
      examples?: Record<
        string,
        IExample | IJsonSchema.IReference<`#/components/examples/${string}`>
      >;
    }

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
      headers?: Record<
        string,
        | Omit<IOperation.IParameter, "in">
        | IJsonSchema.IReference<`#/components/headers/${string}`>
      >;

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
      examples?: Record<
        string,
        IExample | IJsonSchema.IReference<`#/components/examples/${string}`>
      >;
    }
  }

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

  /* -----------------------------------------------------------
    SCHEMA DEFINITIONS
  ----------------------------------------------------------- */
  /** Reusable components storage. */
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

  /** JSON Schema type for OpenAPI v3.0. */
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
    /** Boolean type. */
    export interface IBoolean
      extends Omit<IJsonSchemaAttribute.IBoolean, "examples">,
        __IAttribute {
      /** Whether nullable. */
      nullable?: boolean;

      /** Default value. */
      default?: boolean | null;

      /** Allowed values. */
      enum?: Array<boolean | null>;
    }

    /** Integer type. */
    export interface IInteger
      extends Omit<IJsonSchemaAttribute.IInteger, "examples">,
        __IAttribute {
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

    /** Number (double) type. */
    export interface INumber
      extends Omit<IJsonSchemaAttribute.INumber, "examples">,
        __IAttribute {
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
      extends Omit<IJsonSchemaAttribute.IString, "examples">,
        __IAttribute {
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

    /** Array type. */
    export interface IArray
      extends Omit<IJsonSchemaAttribute.IArray, "examples">,
        __IAttribute {
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

    /** Object type. */
    export interface IObject
      extends Omit<IJsonSchemaAttribute.IObject, "examples">,
        __IAttribute {
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
        mapping?: Record<string, string>;
      }
    }

    /** Null type. */
    export interface INullOnly
      extends Omit<IJsonSchemaAttribute.INull, "examples">,
        __IAttribute {
      /** Default value. */
      default?: null;
    }

    /** Unknown type. */
    export interface IUnknown
      extends Omit<IJsonSchemaAttribute.IUnknown, "examples">,
        __IAttribute {
      /** Default value. */
      default?: any;
    }

    /** @internal Base attribute interface. */
    export interface __IAttribute
      extends Omit<IJsonSchemaAttribute, "examples"> {
      /** Example values. */
      examples?: any[] | Record<string, any>;
    }
  }

  /** Security scheme types. */
  export type ISecurityScheme =
    | ISecurityScheme.IApiKey
    | ISecurityScheme.IHttpBasic
    | ISecurityScheme.IHttpBearer
    | ISecurityScheme.IOAuth2
    | ISecurityScheme.IOpenId;
  export namespace ISecurityScheme {
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
        scopes?: Record<string, string>;
      }
    }
  }
}
