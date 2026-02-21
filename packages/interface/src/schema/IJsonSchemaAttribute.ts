/**
 * Common attributes shared by all JSON schema types.
 *
 * `IJsonSchemaAttribute` defines the base set of metadata properties that can
 * be attached to any JSON schema type. These attributes provide documentation,
 * deprecation status, examples, and access control information.
 *
 * This interface serves as the foundation for all schema types in typia's JSON
 * Schema generation. The namespace contains type-specific variants (e.g.,
 * {@link IBoolean}, {@link IString}) that add a `type` discriminator while
 * inheriting all base attributes.
 *
 * These attributes are populated from JSDoc comments during schema generation:
 *
 * - `@title` tag → {@link title}
 * - Main comment body → {@link description}
 * - `@deprecated` tag → {@link deprecated}
 * - `@example` tag → {@link example}
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IJsonSchemaAttribute {
  /**
   * Short title for the schema.
   *
   * A brief, human-readable name for the type. Typically extracted from the
   * first line of a JSDoc comment or the `@title` tag.
   */
  title?: string;

  /**
   * Detailed description of the schema.
   *
   * Full documentation for the type, explaining its purpose, constraints, and
   * usage. Extracted from JSDoc comment body. Supports markdown formatting in
   * many JSON Schema consumers.
   */
  description?: string;

  /**
   * Whether this type is deprecated.
   *
   * When `true`, indicates the type should no longer be used and may be removed
   * in future versions. Set via the `@deprecated` JSDoc tag.
   */
  deprecated?: boolean;

  /**
   * Single example value for the schema.
   *
   * A representative value that conforms to the schema, useful for
   * documentation and testing. Set via the `@example` JSDoc tag.
   */
  example?: any;

  /**
   * Named example values for the schema.
   *
   * Multiple examples as key-value pairs, where keys are example names and
   * values are conforming data. Useful for showing different valid states or
   * edge cases.
   */
  examples?: Record<string, any>;

  /**
   * Whether the property is read-only.
   *
   * When `true`, the property should not be modified by clients and is
   * typically set by the server. Useful for generated IDs, timestamps, etc.
   */
  readOnly?: boolean;

  /**
   * Whether the property is write-only.
   *
   * When `true`, the property is accepted on input but never returned in
   * responses. Common for sensitive data like passwords.
   */
  writeOnly?: boolean;
}
export namespace IJsonSchemaAttribute {
  /**
   * Attribute interface for boolean schema types.
   *
   * Extends base attributes with `type: "boolean"` discriminator.
   */
  export interface IBoolean extends ISignificant<"boolean"> {}

  /**
   * Attribute interface for integer schema types.
   *
   * Extends base attributes with `type: "integer"` discriminator. Note: JSON
   * Schema uses "integer" for whole numbers, distinct from "number".
   */
  export interface IInteger extends ISignificant<"integer"> {}

  /**
   * Attribute interface for number schema types.
   *
   * Extends base attributes with `type: "number"` discriminator. Represents
   * floating-point numbers in JSON Schema.
   */
  export interface INumber extends ISignificant<"number"> {}

  /**
   * Attribute interface for string schema types.
   *
   * Extends base attributes with `type: "string"` discriminator.
   */
  export interface IString extends ISignificant<"string"> {}

  /**
   * Attribute interface for object schema types.
   *
   * Extends base attributes with `type: "object"` discriminator. Used for
   * structured data with named properties.
   */
  export interface IObject extends ISignificant<"object"> {}

  /**
   * Attribute interface for array schema types.
   *
   * Extends base attributes with `type: "array"` discriminator. Represents
   * ordered collections of items.
   */
  export interface IArray extends ISignificant<"array"> {}

  /**
   * Attribute interface for null schema types.
   *
   * Extends base attributes with `type: "null"` discriminator. Represents the
   * JSON null value.
   */
  export interface INull extends ISignificant<"null"> {}

  /**
   * Attribute interface for unknown/untyped schemas.
   *
   * Used when the schema type is not specified or cannot be determined. The
   * `type` property is explicitly undefined to indicate no type constraint.
   */
  export interface IUnknown extends IJsonSchemaAttribute {
    type?: undefined;
  }

  /**
   * Base interface for type-discriminated schema attributes.
   *
   * Internal helper that combines base attributes with a type discriminator.
   * Each specific type interface (IBoolean, IString, etc.) extends this with
   * its corresponding type literal.
   *
   * @template Type - The JSON Schema type string literal
   */
  interface ISignificant<Type extends string> extends IJsonSchemaAttribute {
    type: Type;
  }
}
