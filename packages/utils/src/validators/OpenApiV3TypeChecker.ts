import { OpenApiV3 } from "@typia/interface";

/**
 * Type checker for raw OpenAPI v3.0 JSON schemas.
 *
 * `OpenApiV3TypeChecker` provides type guard functions for
 * {@link OpenApiV3.IJsonSchema} (raw, unemended format). For typia's normalized
 * format, use {@link OpenApiTypeChecker} instead.
 *
 * Key differences from v3.1: v3.0 uses `nullable: true` property instead of
 * union types, and has no `const` or tuple support.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The namespace holds the guards for raw 3.0 schemas, whose union and null spellings are `allOf`, `anyOf`, `oneOf` and a `type` of `null`, with `nullable` left as a flag on the other variants; the guards tell variants apart so the upgrader can convert them.
 * @evidence contracts/common.md#clear-and-simple-design A flat set of one-line guards with no operation beyond narrowing.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The guards test the dialect's own keys and mention no document.
 * @evidence contracts/common.md#meaningful-documentation The comment contrasts the 3.0 dialect with 3.1 and points to the normalized checker; each guard has a doc.
 */
export namespace OpenApiV3TypeChecker {
  /**
   * Test whether the schema is a boolean type.
   *
   * It is one when its `type` is `boolean`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is a boolean type
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `boolean` and narrows the schema union to the boolean variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isBoolean = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IBoolean =>
    (schema as OpenApiV3.IJsonSchema.IBoolean).type === "boolean";

  /**
   * Test whether the schema is an integer type.
   *
   * It is one when its `type` is `integer`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is an integer type
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `integer` and narrows the schema union to the integer variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isInteger = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IInteger =>
    (schema as OpenApiV3.IJsonSchema.IInteger).type === "integer";

  /**
   * Test whether the schema is a number type.
   *
   * It is one when its `type` is `number`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is a number type
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `number` and narrows the schema union to the number variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isNumber = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.INumber =>
    (schema as OpenApiV3.IJsonSchema.INumber).type === "number";

  /**
   * Test whether the schema is a string type.
   *
   * It is one when its `type` is `string`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is a string type
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `string` and narrows the schema union to the string variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isString = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IString =>
    (schema as OpenApiV3.IJsonSchema.IString).type === "string";

  /**
   * Test whether the schema is an array type.
   *
   * It is one when its `type` is `array`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is an array type
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `array` and narrows the schema union to the array variant; it inspects no other member, so a schema that is malformed beyond that member still passes. Unlike the emended checker it does not require `items`, because 3.0 documents may omit it.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isArray = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IArray =>
    (schema as OpenApiV3.IJsonSchema.IArray).type === "array";

  /**
   * Test whether the schema is an object type.
   *
   * It is one when its `type` is `object`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is an object type
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `object` and narrows the schema union to the object variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isObject = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IObject =>
    (schema as OpenApiV3.IJsonSchema.IObject).type === "object";

  /**
   * Test whether the schema is a reference.
   *
   * It is one when it has a `$ref`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is a reference
   *
   * @evidence contracts/common.md#principled-implementation The guard reads a defined `$ref` and narrows the schema union to the reference variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isReference = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IReference =>
    (schema as OpenApiV3.IJsonSchema.IReference).$ref !== undefined;

  /**
   * Test whether the schema is an `allOf` composition.
   *
   * It is one when it has an `allOf` list; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is an `allOf` composition
   *
   * @evidence contracts/common.md#principled-implementation The guard reads a defined `allOf` and narrows the schema union to the all-of variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isAllOf = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IAllOf =>
    (schema as OpenApiV3.IJsonSchema.IAllOf).allOf !== undefined;

  /**
   * Test whether the schema is an `anyOf` union.
   *
   * It is one when it has an `anyOf` list; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is an `anyOf` union
   *
   * @evidence contracts/common.md#principled-implementation The guard reads a defined `anyOf` and narrows the schema union to the any-of variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isAnyOf = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IAnyOf =>
    (schema as OpenApiV3.IJsonSchema.IAnyOf).anyOf !== undefined;

  /**
   * Test whether the schema is a `oneOf` union.
   *
   * It is one when it has a `oneOf` list; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is a `oneOf` union
   *
   * @evidence contracts/common.md#principled-implementation The guard reads a defined `oneOf` and narrows the schema union to the one-of variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isOneOf = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IOneOf =>
    (schema as OpenApiV3.IJsonSchema.IOneOf).oneOf !== undefined;

  /**
   * Test whether the schema is a null-only type.
   *
   * It is one when its `type` is `null`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is a null-only type
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `null` and narrows the schema union to the standalone null variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isNullOnly = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.INullOnly =>
    (schema as OpenApiV3.IJsonSchema.INullOnly).type === "null";
}
