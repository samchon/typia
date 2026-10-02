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
 *
 * @evidence contracts/common.md#principled-implementation Every schema variant shares the same optional documentation metadata (title, description, deprecation, examples, read and write access); all fields are optional because a schema is valid without them, and `example` is `any` since an example may be any JSON value.
 * @evidence contracts/common.md#clear-and-simple-design One base interface holds the shared fields and the namespace derives each typed variant from it, so a metadata field is added in one place.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts It is a plain data shape populated by the generator from JSDoc and applies no inference of its own.
 * @evidence contracts/common.md#meaningful-documentation The comment states the JSDoc tags that populate each field and every field has its own description and meaning.
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
   *
   * @evidence contracts/common.md#principled-implementation The boolean variant fixes the `type` discriminator to the literal "boolean" through the shared helper while inheriting the attributes, so the discriminator selects the variant in a union.
   * @evidence contracts/common.md#clear-and-simple-design An empty extension of the private discriminator helper gives the boolean variant its own name for the typed schemas to extend.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Boolean-specific keywords such as enum and default live in the LLM and OpenAPI schema interfaces; this attribute variant adds none, so it cannot disagree with them.
   * @evidence contracts/common.md#meaningful-documentation The comment states the discriminator it adds and that it inherits the base attributes.
   */
  export interface IBoolean extends ISignificant<"boolean"> {}

  /**
   * Attribute interface for integer schema types.
   *
   * Extends base attributes with `type: "integer"` discriminator. Note: JSON
   * Schema uses "integer" for whole numbers, distinct from "number".
   *
   * @evidence contracts/common.md#principled-implementation The integer variant uses the literal "integer", the JSON Schema type for whole numbers, which stays distinct from "number" so the two can be told apart in a union.
   * @evidence contracts/common.md#clear-and-simple-design An empty extension of the discriminator helper, named so integer schemas can extend it.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It states no range; integer bounds belong to the schema interfaces that extend it.
   * @evidence contracts/common.md#meaningful-documentation The comment notes that integer is distinct from number in JSON Schema.
   */
  export interface IInteger extends ISignificant<"integer"> {}

  /**
   * Attribute interface for number schema types.
   *
   * Extends base attributes with `type: "number"` discriminator. Represents
   * floating-point numbers in JSON Schema.
   *
   * @evidence contracts/common.md#principled-implementation The number variant uses the literal "number", which in JSON Schema covers every numeric value including integers.
   * @evidence contracts/common.md#clear-and-simple-design An empty extension of the discriminator helper.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It defines no precision or range, which the numeric schemas add.
   * @evidence contracts/common.md#meaningful-documentation The comment states the discriminator and that it represents floating-point numbers.
   */
  export interface INumber extends ISignificant<"number"> {}

  /**
   * Attribute interface for string schema types.
   *
   * Extends base attributes with `type: "string"` discriminator.
   *
   * @evidence contracts/common.md#principled-implementation The string variant uses the literal "string".
   * @evidence contracts/common.md#clear-and-simple-design An empty extension of the discriminator helper.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Format and length keywords are left to the schema interfaces that extend it.
   * @evidence contracts/common.md#meaningful-documentation The comment states the discriminator it adds.
   */
  export interface IString extends ISignificant<"string"> {}

  /**
   * Attribute interface for object schema types.
   *
   * Extends base attributes with `type: "object"` discriminator. Used for
   * structured data with named properties.
   *
   * @evidence contracts/common.md#principled-implementation The object variant uses the literal "object", the type of structured values with named properties.
   * @evidence contracts/common.md#clear-and-simple-design An empty extension of the discriminator helper.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Property maps and required lists are defined by the extending schema interfaces, not here.
   * @evidence contracts/common.md#meaningful-documentation The comment states the discriminator and what the type represents.
   */
  export interface IObject extends ISignificant<"object"> {}

  /**
   * Attribute interface for array schema types.
   *
   * Extends base attributes with `type: "array"` discriminator. Represents
   * ordered collections of items.
   *
   * @evidence contracts/common.md#principled-implementation The array variant uses the literal "array", the type of ordered collections.
   * @evidence contracts/common.md#clear-and-simple-design An empty extension of the discriminator helper.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts Item schemas and size bounds belong to the extending schema interfaces.
   * @evidence contracts/common.md#meaningful-documentation The comment states the discriminator and meaning.
   */
  export interface IArray extends ISignificant<"array"> {}

  /**
   * Attribute interface for null schema types.
   *
   * Extends base attributes with `type: "null"` discriminator. Represents the
   * JSON null value.
   *
   * @evidence contracts/common.md#principled-implementation The null variant uses the literal "null", JSON's null value, the only type whose single value is null.
   * @evidence contracts/common.md#clear-and-simple-design An empty extension of the discriminator helper.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It has no constraint keywords because null admits none.
   * @evidence contracts/common.md#meaningful-documentation The comment states the discriminator and meaning.
   */
  export interface INull extends ISignificant<"null"> {}

  /**
   * Attribute interface for unknown/untyped schemas.
   *
   * Used when the schema type is not specified or cannot be determined. The
   * `type` property is explicitly undefined to indicate no type constraint.
   *
   * @evidence contracts/common.md#principled-implementation Declaring `type?: undefined` states that no type constraint applies, so the variant is an attribute-only schema distinguishable from every typed variant by the absent discriminator.
   * @evidence contracts/common.md#clear-and-simple-design It extends the base directly instead of the discriminator helper, since it has no required literal.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It represents unconstrained schemas without any `any`-typed discriminator or cast.
   * @evidence contracts/common.md#meaningful-documentation The comment explains why `type` is explicitly undefined.
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
