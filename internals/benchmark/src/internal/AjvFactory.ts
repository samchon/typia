import { OpenApiV3 } from "@samchon/openapi";
import Ajv, { Options } from "ajv";
import { IJsonSchemaCollection } from "typia";

export namespace AjvFactory {
  export const create =
    (options: Options) => (app: IJsonSchemaCollection<"3.0">) =>
      new Ajv({
        schemas: Object.entries(app.components.schemas ?? {}).map(
          ([key, value]) => ({
            ...emendSchema(value),
            $id: `#/components/schemas/${key}`,
          }),
        ),
        ...options,
      }).compile(emendSchema(app.schemas[0]));

  const emendSchema = (
    schema: OpenApiV3.IJsonSchema,
  ): OpenApiV3.IJsonSchema => {
    if (isOneOf(schema))
      return {
        ...schema,
        oneOf: schema.oneOf.map(emendSchema),
      };
    else if (isArray(schema))
      return {
        ...schema,
        items: emendSchema(schema.items),
      };
    else if (isObject(schema))
      return {
        ...schema,
        properties: Object.entries(schema.properties ?? {}).reduce(
          (obj, [key, value]) => ({
            ...obj,
            [key]: emendSchema(value),
          }),
          {},
        ),
        additionalProperties:
          typeof schema.additionalProperties === "object"
            ? emendSchema(schema.additionalProperties)
            : schema.additionalProperties,
      };
    else if (!isInteger(schema) && !isNumber(schema)) return { ...schema };
    return {
      ...schema,
      ...(schema.exclusiveMinimum === true && schema.minimum !== undefined
        ? ({
            minimum: undefined,
            exclusiveMinimum: schema.minimum,
          } as any)
        : {}),
      ...(schema.exclusiveMaximum === true && schema.maximum !== undefined
        ? {
            exclusiveMaximum: schema.maximum,
            maximum: undefined,
          }
        : {}),
    };
  };

  const isOneOf = (
    input: OpenApiV3.IJsonSchema,
  ): input is OpenApiV3.IJsonSchema.IOneOf =>
    (input as OpenApiV3.IJsonSchema.IOneOf).oneOf !== undefined;
  const isInteger = (
    input: OpenApiV3.IJsonSchema,
  ): input is OpenApiV3.IJsonSchema.IInteger =>
    (input as OpenApiV3.IJsonSchema.IInteger).type === "integer";
  const isNumber = (
    input: OpenApiV3.IJsonSchema,
  ): input is OpenApiV3.IJsonSchema.INumber =>
    (input as OpenApiV3.IJsonSchema.INumber).type === "number";
  const isArray = (
    input: OpenApiV3.IJsonSchema,
  ): input is OpenApiV3.IJsonSchema.IArray =>
    (input as OpenApiV3.IJsonSchema.IArray).type === "array";
  const isObject = (
    input: OpenApiV3.IJsonSchema,
  ): input is OpenApiV3.IJsonSchema.IObject =>
    (input as OpenApiV3.IJsonSchema.IObject).type === "object";
}
