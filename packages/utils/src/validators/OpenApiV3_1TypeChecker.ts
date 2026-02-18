import { OpenApiV3_1 } from "@typia/interface";

export namespace OpenApiV3_1TypeChecker {
  export const isConstant = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IConstant =>
    (schema as OpenApiV3_1.IJsonSchema.IConstant).const !== undefined;

  export const isBoolean = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IBoolean =>
    (schema as OpenApiV3_1.IJsonSchema.IBoolean).type === "boolean";

  export const isInteger = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IInteger =>
    (schema as OpenApiV3_1.IJsonSchema.IInteger).type === "integer";

  export const isNumber = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.INumber =>
    (schema as OpenApiV3_1.IJsonSchema.INumber).type === "number";

  export const isString = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IString =>
    (schema as OpenApiV3_1.IJsonSchema.IString).type === "string";

  export const isArray = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IArray =>
    (schema as OpenApiV3_1.IJsonSchema.IArray).type === "array";

  export const isObject = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IObject =>
    (schema as OpenApiV3_1.IJsonSchema.IObject).type === "object";

  export const isReference = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IReference =>
    (schema as OpenApiV3_1.IJsonSchema.IReference).$ref !== undefined;

  export const isRecursiveReference = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IRecursiveReference =>
    (schema as OpenApiV3_1.IJsonSchema.IRecursiveReference).$recursiveRef !==
    undefined;

  export const isAllOf = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IAllOf =>
    (schema as OpenApiV3_1.IJsonSchema.IAllOf).allOf !== undefined;

  export const isAnyOf = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IAnyOf =>
    (schema as OpenApiV3_1.IJsonSchema.IAnyOf).anyOf !== undefined;

  export const isOneOf = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IOneOf =>
    (schema as OpenApiV3_1.IJsonSchema.IOneOf).oneOf !== undefined;

  export const isNullOnly = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.INull =>
    (schema as OpenApiV3_1.IJsonSchema.INull).type === "null";

  export const isMixed = (
    schema: OpenApiV3_1.IJsonSchema,
  ): schema is OpenApiV3_1.IJsonSchema.IMixed =>
    Array.isArray((schema as OpenApiV3_1.IJsonSchema.IMixed).type);
}
