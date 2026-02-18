import { OpenApiV3 } from "@typia/interface";

export namespace OpenApiV3TypeChecker {
  export const isBoolean = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IBoolean =>
    (schema as OpenApiV3.IJsonSchema.IBoolean).type === "boolean";

  export const isInteger = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IInteger =>
    (schema as OpenApiV3.IJsonSchema.IInteger).type === "integer";

  export const isNumber = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.INumber =>
    (schema as OpenApiV3.IJsonSchema.INumber).type === "number";

  export const isString = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IString =>
    (schema as OpenApiV3.IJsonSchema.IString).type === "string";

  export const isArray = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IArray =>
    (schema as OpenApiV3.IJsonSchema.IArray).type === "array";

  export const isObject = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IObject =>
    (schema as OpenApiV3.IJsonSchema.IObject).type === "object";

  export const isReference = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IReference =>
    (schema as OpenApiV3.IJsonSchema.IReference).$ref !== undefined;

  export const isAllOf = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IAllOf =>
    (schema as OpenApiV3.IJsonSchema.IAllOf).allOf !== undefined;

  export const isAnyOf = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IAnyOf =>
    (schema as OpenApiV3.IJsonSchema.IAnyOf).anyOf !== undefined;

  export const isOneOf = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.IOneOf =>
    (schema as OpenApiV3.IJsonSchema.IOneOf).oneOf !== undefined;

  export const isNullOnly = (
    schema: OpenApiV3.IJsonSchema,
  ): schema is OpenApiV3.IJsonSchema.INullOnly =>
    (schema as OpenApiV3.IJsonSchema.INullOnly).type === "null";
}
