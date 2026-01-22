import { IJsonSchemaAttribute } from "./structures/IJsonSchemaAttribute";

/**
 * Swagger v2.0 definition.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export namespace SwaggerV2 {
  export type Method =
    | "get"
    | "post"
    | "put"
    | "delete"
    | "options"
    | "head"
    | "patch"
    | "trace";

  /** @internal */
  export const is = (input: any): input is IDocument =>
    typeof input === "object" &&
    input !== null &&
    typeof input.swagger === "string" &&
    input.swagger.startsWith("2.0");

  /* -----------------------------------------------------------
    DOCUMENTS
  ----------------------------------------------------------- */
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
      description?: string;
    }
  }

  /* -----------------------------------------------------------
    OPERATORS
  ----------------------------------------------------------- */
  export interface IPath
    extends Partial<Record<Method, IOperation | undefined>> {
    parameters?: Array<
      IOperation.IParameter | IJsonSchema.IReference<`#/parameters/${string}`>
    >;
  }

  export interface IOperation {
    operationId?: string;
    parameters?: Array<
      | IOperation.IParameter
      | IJsonSchema.IReference<`#/definitions/parameters/${string}`>
    >;
    responses?: Record<
      string,
      | IOperation.IResponse
      | IJsonSchema.IReference<`#/definitions/responses/${string}`>
    >;
    summary?: string;
    description?: string;
    security?: Record<string, string[]>[];
    tags?: string[];
    deprecated?: boolean;
  }
  export namespace IOperation {
    export type IParameter = IGeneralParameter | IBodyParameter;
    export type IGeneralParameter = IJsonSchema & {
      name: string;
      in: string;
      description?: string;
    };
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
      example?: any;
    }
  }

  /* -----------------------------------------------------------
    DEFINITIONS
  ----------------------------------------------------------- */
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
    export interface IBoolean
      extends Omit<IJsonSchemaAttribute.IBoolean, "examples">,
        __ISignificant<"boolean"> {
      default?: boolean | null;
      enum?: Array<boolean | null>;
    }
    export interface IInteger
      extends Omit<IJsonSchemaAttribute.IInteger, "examples">,
        __ISignificant<"integer"> {
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
    export interface INumber
      extends Omit<IJsonSchemaAttribute.INumber, "examples">,
        __ISignificant<"number"> {
      default?: number | null;
      enum?: Array<number | null>;
      minimum?: number;
      maximum?: number;
      exclusiveMinimum?: number | boolean;
      exclusiveMaximum?: number | boolean;
      /** @exclusiveMinimum 0 */ multipleOf?: number;
    }
    export interface IString
      extends Omit<IJsonSchemaAttribute.IString, "examples">,
        __ISignificant<"string"> {
      default?: string | null;
      enum?: Array<string | null>;
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
      pattern?: string;
      /** @type uint64 */ minLength?: number;
      /** @type uint64 */ maxLength?: number;
    }

    export interface IArray
      extends Omit<IJsonSchemaAttribute.IArray, "examples">,
        __ISignificant<"array"> {
      items: IJsonSchema;
      uniqueItems?: boolean;
      /** @type uint64 */ minItems?: number;
      /** @type uint64 */ maxItems?: number;
    }
    export interface IObject
      extends Omit<IJsonSchemaAttribute.IObject, "examples">,
        __ISignificant<"object"> {
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
    export interface __IAttribute
      extends Omit<IJsonSchemaAttribute, "examples" | "writeOnly"> {
      examples?: any[];
    }
  }

  export type ISecurityDefinition =
    | ISecurityDefinition.IApiKey
    | ISecurityDefinition.IBasic
    | ISecurityDefinition.IOauth2Implicit
    | ISecurityDefinition.IOauth2AccessCode
    | ISecurityDefinition.IOauth2Password
    | ISecurityDefinition.IOauth2Application;
  export namespace ISecurityDefinition {
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
      description?: string;
    }
  }
}
