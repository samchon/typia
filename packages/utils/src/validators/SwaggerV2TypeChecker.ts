import { SwaggerV2 } from "@typia/interface";

export namespace SwaggerV2TypeChecker {
  export const isBoolean = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IBoolean =>
    (schema as SwaggerV2.IJsonSchema.IBoolean).type === "boolean";

  export const isInteger = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IInteger =>
    (schema as SwaggerV2.IJsonSchema.IInteger).type === "integer";

  export const isNumber = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.INumber =>
    (schema as SwaggerV2.IJsonSchema.INumber).type === "number";

  export const isString = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IString =>
    (schema as SwaggerV2.IJsonSchema.IString).type === "string";

  export const isArray = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IArray =>
    (schema as SwaggerV2.IJsonSchema.IArray).type === "array";

  export const isObject = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IObject =>
    (schema as SwaggerV2.IJsonSchema.IObject).type === "object";

  export const isReference = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IReference =>
    (schema as SwaggerV2.IJsonSchema.IReference).$ref !== undefined;

  export const isAllOf = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IAllOf =>
    (schema as SwaggerV2.IJsonSchema.IAllOf).allOf !== undefined;

  export const isOneOf = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IOneOf =>
    (schema as SwaggerV2.IJsonSchema.IOneOf)["x-oneOf"] !== undefined;

  export const isAnyOf = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.IAnyOf =>
    (schema as SwaggerV2.IJsonSchema.IAnyOf)["x-anyOf"] !== undefined;

  export const isNullOnly = (
    schema: SwaggerV2.IJsonSchema,
  ): schema is SwaggerV2.IJsonSchema.INullOnly =>
    (schema as SwaggerV2.IJsonSchema.INullOnly).type === "null";
}
