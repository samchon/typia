/**
<<<<<<< HEAD
 * Common attributes for JSON schema types.
 *
 * `IJsonSchemaAttribute` is a common interface for all JSON schema types
 * supported in here `@samchon/openapi`. Here is the list of affected JSON
 * schema types in `@samchon/openapi`, and you can extend the interface by
 * declaring module augmentation.
 *
 * - {@link OpenApi.IJsonSchema}
 * - {@link OpenApiV3_1.IJsonSchema}
 * - {@link OpenApiV3.IJsonSchema}
 * - {@link SwaggerV2.IJsonSchema}
 * - {@link ILlmSchema}
 *
 * For example, if you extend the `IJsonSchemaAttribute` interface like below,
 * every JSON schema types in `@samchon/openapi` will have a new custom
 * attribute `x-wrtn-placeholder`.
 *
 * Also, if you augment the nested type like `IJsonSchemaAttribute.IString`, you
 * can add the custom attribute to every string types in the JSON schema. In the
 * below example case, every string types will have a new custom attribute
 * `x-wrtn-secret-key`.
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
export interface IJsonSchemaAttribute {
<<<<<<< HEAD
  /** Title of the schema. */
  title?: string;

  /** Detailed description of the schema. */
  description?: string;

  /** Whether the type is deprecated or not. */
  deprecated?: boolean;

  /** Example value. */
  example?: any;

  /** List of example values as key-value pairs. */
  examples?: Record<string, any>;

  /** Whether the property is read-only. */
  readOnly?: boolean;

  /** Whether the property is write-only. */
  writeOnly?: boolean;
}
export namespace IJsonSchemaAttribute {
  /** Common attributes for boolean types. */
  export interface IBoolean extends ISignificant<"boolean"> {}

  /** Common attributes for integer types. */
  export interface IInteger extends ISignificant<"integer"> {}

  /** Common attributes for number types. */
  export interface INumber extends ISignificant<"number"> {}

  /** Common attributes for string types. */
  export interface IString extends ISignificant<"string"> {}

  /** Common attributes for object types. */
  export interface IObject extends ISignificant<"object"> {}

  /** Common attributes for array types. */
  export interface IArray extends ISignificant<"array"> {}

  /** Common attributes for null types. */
  export interface INull extends ISignificant<"null"> {}

  /** Common attributes for unknown types. */
  export interface IUnknown extends IJsonSchemaAttribute {
    /** Type is never be defined. */
    type?: undefined;
  }

  /** Significant attributes that can be applied to the most types. */
  interface ISignificant<Type extends string> extends IJsonSchemaAttribute {
    /** Discriminator value of the type. */
=======
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
>>>>>>> a7cbc4f1aec621fbd409afc8da295570e4fa2713
    type: Type;
  }
}
