import { IJsonSchemaAttribute } from "../schema/IJsonSchemaAttribute";
import * as tags from "../tags";

/**
 * Emended OpenAPI v3.1 specification.
 *
 * `OpenApi` is a refined OpenAPI v3.1 that removes ambiguous and duplicated
 * expressions for `typia` and `nestia` compatibility.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace OpenApi {
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

  /** OpenAPI document structure. */
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
    export interface IContent
      extends Partial<Record<ContentType, IMediaType>> {}

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
    export type ContentType =
      | "text/plain"
      | "application/json"
      | "application/x-www-form-url-encoded"
      | "multipart/form-data"
      | "*/*"
      | (string & {});
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

  /** Reusable components storage. */
  export interface IComponents {
    /** Named schemas. */
    schemas?: Record<string, IJsonSchema>;

    /** Named security schemes. */
    securitySchemes?: Record<string, ISecurityScheme>;
  }

  /** JSON Schema type for OpenAPI. */
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
        mapping?: Record<string, string>;
      }
    }

    /** Null type. */
    export interface INull extends IJsonSchemaAttribute.INull {
      /** Default value. */
      default?: null;
    }

    /** Unknown (`any`) type. */
    export interface IUnknown extends IJsonSchemaAttribute.IUnknown {
      /** Default value. */
      default?: any;
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
