import { OpenApiV3_1 } from "@typia/interface";

/**
 * Type checker for raw OpenAPI v3.1 JSON schemas.
 *
 * `OpenApiV3_1TypeChecker` provides type guard functions for
 * {@link OpenApiV3_1.IJsonSchema} (raw, unemended format). For typia's
 * normalized format, use {@link OpenApiTypeChecker} instead.
 *
 * Key v3.1 features: `const` keyword, `type` arrays (`["string", "null"]`),
 * `prefixItems` for tuples, JSON Schema draft 2020-12 compatibility.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The namespace holds the guards for raw 3.1 schemas, which add `const`, recursive references and `type` arrays on top of the 3.0 shapes; the guards separate those variants so the upgrader can expand a mixed type into one member per type.
 * @evidence contracts/common.md#clear-and-simple-design A flat set of one-line guards with no operation beyond narrowing.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The guards test the dialect's own keys and mention no document.
 * @evidence contracts/common.md#meaningful-documentation The comment lists the main 3.1 features and points to the normalized checker; each guard has a doc.
 */
export namespace OpenApiV3_1TypeChecker {
  /**
   * Test whether the schema is a constant.
   *
   * It is one when it has a `const` value; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is a constant
   *
   * @evidence contracts/common.md#principled-implementation The guard reads a defined `const` and narrows the schema union to the constant variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isConstant = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IConstant =>
    (schema as OpenApiV3_1.IJsonSchema.IConstant).const !== undefined;

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
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IBoolean =>
    (schema as OpenApiV3_1.IJsonSchema.IBoolean).type === "boolean";

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
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IInteger =>
    (schema as OpenApiV3_1.IJsonSchema.IInteger).type === "integer";

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
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.INumber =>
    (schema as OpenApiV3_1.IJsonSchema.INumber).type === "number";

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
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IString =>
    (schema as OpenApiV3_1.IJsonSchema.IString).type === "string";

  /**
   * Test whether the schema is an array type.
   *
   * It is one when its `type` is `array`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is an array type
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `array` and narrows the schema union to the array variant; it inspects no other member, so a schema that is malformed beyond that member still passes. It accepts both the legacy `items` list and the `prefixItems` tuple spelling, which the upgrader tells apart.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isArray = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IArray =>
    (schema as OpenApiV3_1.IJsonSchema.IArray).type === "array";

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
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IObject =>
    (schema as OpenApiV3_1.IJsonSchema.IObject).type === "object";

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
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IReference =>
    (schema as OpenApiV3_1.IJsonSchema.IReference).$ref !== undefined;

  /**
   * Test whether the schema is a recursive reference.
   *
   * It is one when it has a `$recursiveRef`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is a recursive reference
   *
   * @evidence contracts/common.md#principled-implementation The guard reads a defined `$recursiveRef` and narrows the schema union to the recursive reference variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isRecursiveReference = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IRecursiveReference =>
    (schema as OpenApiV3_1.IJsonSchema.IRecursiveReference).$recursiveRef !==
    undefined;

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
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IAllOf =>
    (schema as OpenApiV3_1.IJsonSchema.IAllOf).allOf !== undefined;

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
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IAnyOf =>
    (schema as OpenApiV3_1.IJsonSchema.IAnyOf).anyOf !== undefined;

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
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IOneOf =>
    (schema as OpenApiV3_1.IJsonSchema.IOneOf).oneOf !== undefined;

  /**
   * Test whether the schema is a null type.
   *
   * It is one when its `type` is `null`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is a null type
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `null` and narrows the schema union to the null variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isNullOnly = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.INull =>
    (schema as OpenApiV3_1.IJsonSchema.INull).type === "null";

  /**
   * Test whether the schema is a mixed type.
   *
   * It is one when its `type` is an array of type names; no other member is
   * inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is a mixed type
   *
   * @evidence contracts/common.md#principled-implementation The guard reads a `type` that is an array of type names and narrows the schema union to the mixed variant; it inspects no other member, so a schema that is malformed beyond that member still passes. A schema that is both mixed and has other keys is still reported as mixed; the upgrader splits it.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isMixed = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IMixed =>
    Array.isArray((schema as OpenApiV3_1.IJsonSchema.IMixed).type);
}
