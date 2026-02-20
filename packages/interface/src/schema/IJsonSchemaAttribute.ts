/**
 * Common attributes for JSON schema types.
 *
 * `IJsonSchemaAttribute` provides base attributes shared by all JSON schema
 * types. Extendable via module augmentation.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IJsonSchemaAttribute {
  /** Title of the schema. */
  title?: string;

  /** Detailed description of the schema. */
  description?: string;

  /** Whether the type is deprecated. */
  deprecated?: boolean;

  /** Example value. */
  example?: any;

  /** Example values as key-value pairs. */
  examples?: Record<string, any>;

  /** Whether the property is read-only. */
  readOnly?: boolean;

  /** Whether the property is write-only. */
  writeOnly?: boolean;
}
export namespace IJsonSchemaAttribute {
  /** Boolean type attributes. */
  export interface IBoolean extends ISignificant<"boolean"> {}

  /** Integer type attributes. */
  export interface IInteger extends ISignificant<"integer"> {}

  /** Number type attributes. */
  export interface INumber extends ISignificant<"number"> {}

  /** String type attributes. */
  export interface IString extends ISignificant<"string"> {}

  /** Object type attributes. */
  export interface IObject extends ISignificant<"object"> {}

  /** Array type attributes. */
  export interface IArray extends ISignificant<"array"> {}

  /** Null type attributes. */
  export interface INull extends ISignificant<"null"> {}

  /** Unknown type attributes. */
  export interface IUnknown extends IJsonSchemaAttribute {
    type?: undefined;
  }

  /** Base interface with type discriminator. */
  interface ISignificant<Type extends string> extends IJsonSchemaAttribute {
    type: Type;
  }
}
