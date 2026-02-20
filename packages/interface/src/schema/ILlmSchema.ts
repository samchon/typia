import { tags } from "../index";
import { IJsonSchemaAttribute } from "./IJsonSchemaAttribute";

/**
 * Type schema for LLM function calling.
 *
 * `ILlmSchema` is a simplified JSON schema designed for LLM compatibility.
 * Based on OpenAPI v3.1 but omits unsupported features (tuples, const, mixed
 * types). Use {@link ILlmSchema.IConfig.strict} for OpenAI structured output.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export type ILlmSchema =
  | ILlmSchema.IBoolean
  | ILlmSchema.IInteger
  | ILlmSchema.INumber
  | ILlmSchema.IString
  | ILlmSchema.IArray
  | ILlmSchema.IObject
  | ILlmSchema.IReference
  | ILlmSchema.IAnyOf
  | ILlmSchema.INull
  | ILlmSchema.IUnknown;
export namespace ILlmSchema {
  /** LLM schema configuration. */
  export interface IConfig {
    /**
     * Whether to allow `$ref` references everywhere.
     *
     * When `false`, references are inlined except for recursive types.
     * References reduce token cost but may cause hallucination.
     *
     * @default true
     */
    reference: boolean;

    /**
     * Whether to enable strict mode (OpenAI structured output).
     *
     * When `true`, all properties become required and `additionalProperties` is
     * forced to `false`.
     *
     * @default false
     */
    strict: boolean;
  }

  /** Function parameters schema (object type with `$defs`). */
  export interface IParameters extends Omit<IObject, "additionalProperties"> {
    /** Named type definitions for `$ref` referencing. */
    $defs: Record<string, ILlmSchema>;

    /** Always `false` for parameters. */
    additionalProperties: false;
  }

  /** Boolean type. */
  export interface IBoolean extends IJsonSchemaAttribute.IBoolean {
    /** Allowed values. */
    enum?: Array<boolean>;

    /** Default value. */
    default?: boolean;
  }

  /** Integer type. */
  export interface IInteger extends IJsonSchemaAttribute.IInteger {
    /** Allowed values. */
    enum?: Array<number & tags.Type<"int64">>;

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
    multipleOf?: number & tags.Type<"uint64"> & tags.ExclusiveMinimum<0>;
  }

  /** Number (double) type. */
  export interface INumber extends IJsonSchemaAttribute.INumber {
    /** Allowed values. */
    enum?: Array<number>;

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
    /** Allowed values. */
    enum?: Array<string>;

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
    /** Element type schema. */
    items: ILlmSchema;

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
    properties: Record<string, ILlmSchema>;

    /** Dynamic property schema, or `true` for any, `false` for none. */
    additionalProperties?: ILlmSchema | boolean;

    /** Required property keys. */
    required: string[];
  }

  /** Reference to a named schema in `$defs`. */
  export interface IReference extends IJsonSchemaAttribute {
    /** Reference path (e.g., `#/$defs/TypeName`). */
    $ref: string;
  }

  /** Union type (`A | B | C`). */
  export interface IAnyOf extends IJsonSchemaAttribute {
    /** Union member schemas. */
    anyOf: Exclude<ILlmSchema, ILlmSchema.IAnyOf>[];

    /** Discriminator for tagged unions. */
    "x-discriminator"?: IAnyOf.IDiscriminator;
  }
  export namespace IAnyOf {
    /** Discriminator configuration. */
    export interface IDiscriminator {
      /** Discriminator property name. */
      propertyName: string;

      /** Value-to-schema mapping. */
      mapping?: Record<string, string>;
    }
  }

  /** Null type. */
  export interface INull extends IJsonSchemaAttribute.INull {}

  /** Unknown (`any`) type. */
  export interface IUnknown extends IJsonSchemaAttribute.IUnknown {}
}
