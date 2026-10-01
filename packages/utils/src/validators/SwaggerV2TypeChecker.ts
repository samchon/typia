import { SwaggerV2 } from "@typia/interface";

/**
 * Type checker for Swagger v2.0 (OpenAPI v2) JSON schemas.
 *
 * `SwaggerV2TypeChecker` provides type guard functions for
 * {@link SwaggerV2.IJsonSchema}. For typia's normalized format, use
 * {@link OpenApiTypeChecker} instead.
 *
 * Key limitations vs OpenAPI v3.x: No standard `oneOf`/`anyOf` or `nullable`
 * (the `x-oneOf`, `x-anyOf` and `x-nullable` extensions are read instead), uses
 * `definitions` instead of `components.schemas`, body parameters use `in:
 * "body"` with `schema` property.
 *
 * @author Jeongho Nam - https://github.com/samchon
 *
 * @evidence contracts/common.md#principled-implementation The namespace holds the guards for Swagger 2.0 schemas, where unions exist only as the `x-oneOf` and `x-anyOf` extensions and nullability as `x-nullable`; the guards read those extension keys so documents emitted by tools that use them are converted.
 * @evidence contracts/common.md#clear-and-simple-design A flat set of one-line guards with no operation beyond narrowing.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The extension keys are the documented spellings of the dialect and not special cases.
 * @evidence contracts/common.md#meaningful-documentation The comment lists the limitations of the dialect, which name the extensions, and points to the normalized checker.
 */
export namespace SwaggerV2TypeChecker {
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
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IBoolean =>
    (schema as SwaggerV2.IJsonSchema.IBoolean).type === "boolean";

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
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IInteger =>
    (schema as SwaggerV2.IJsonSchema.IInteger).type === "integer";

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
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.INumber =>
    (schema as SwaggerV2.IJsonSchema.INumber).type === "number";

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
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IString =>
    (schema as SwaggerV2.IJsonSchema.IString).type === "string";

  /**
   * Test whether the schema is an array type.
   *
   * It is one when its `type` is `array`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is an array type
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `array` and narrows the schema union to the array variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isArray = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IArray =>
    (schema as SwaggerV2.IJsonSchema.IArray).type === "array";

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
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IObject =>
    (schema as SwaggerV2.IJsonSchema.IObject).type === "object";

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
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IReference =>
    (schema as SwaggerV2.IJsonSchema.IReference).$ref !== undefined;

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
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IAllOf =>
    (schema as SwaggerV2.IJsonSchema.IAllOf).allOf !== undefined;

  /**
   * Test whether the schema is a `oneOf` union.
   *
   * It is one when it has the `x-oneOf` extension, since Swagger 2.0 has no
   * `oneOf`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is a `oneOf` union
   *
   * @evidence contracts/common.md#principled-implementation The guard reads a defined `x-oneOf` and narrows the schema union to the vendor one-of variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isOneOf = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IOneOf =>
    (schema as SwaggerV2.IJsonSchema.IOneOf)["x-oneOf"] !== undefined;

  /**
   * Test whether the schema is an `anyOf` union.
   *
   * It is one when it has the `x-anyOf` extension, since Swagger 2.0 has no
   * `anyOf`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is an `anyOf` union
   *
   * @evidence contracts/common.md#principled-implementation The guard reads a defined `x-anyOf` and narrows the schema union to the vendor any-of variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isAnyOf = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IAnyOf =>
    (schema as SwaggerV2.IJsonSchema.IAnyOf)["x-anyOf"] !== undefined;

  /**
   * Test whether the schema is a null-only type.
   *
   * It is one when its `type` is `null`; no other member is inspected.
   *
   * @param schema Target schema
   *
   * @returns Whether the schema is a null-only type
   *
   * @evidence contracts/common.md#principled-implementation The guard reads `type` equal to `null` and narrows the schema union to the null variant; it inspects no other member, so a schema that is malformed beyond that member still passes.
   * @evidence contracts/common.md#clear-and-simple-design One property test with a type predicate, so a caller narrows once and then reads the variant's own fields.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The test is the declared discriminant of the dialect and names no document or fixture.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the guard tests, the parameter and the result.
   */
  export const isNullOnly = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.INullOnly =>
    (schema as SwaggerV2.IJsonSchema.INullOnly).type === "null";
}
