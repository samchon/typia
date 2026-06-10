import { OpenApi } from "@typia/interface";

/** @internal */
export namespace OpenApiSchemaSanitizer {
  export const omitEmptyRequired = <Schema extends object>(
    schema: Schema,
  ): Schema => {
    const value: unknown = (schema as { required?: unknown }).required;
    if (
      Object.prototype.hasOwnProperty.call(schema, "required") &&
      (value === undefined || (Array.isArray(value) && value.length === 0))
    ) {
      const { required: _required, ...rest } = schema as Schema & {
        required?: unknown;
      };
      return rest as Schema;
    }
    return schema;
  };

  export const omitEmptyRequiredDeep = (
    schema: OpenApi.IJsonSchema,
  ): OpenApi.IJsonSchema => {
    if (isOneOf(schema))
      return omitEmptyRequired({
        ...schema,
        oneOf: schema.oneOf.map(omitEmptyRequiredDeep) as OpenApi.IJsonSchema[],
      } satisfies OpenApi.IJsonSchema.IOneOf);
    if (isTuple(schema))
      return omitEmptyRequired({
        ...schema,
        prefixItems: schema.prefixItems.map(omitEmptyRequiredDeep),
        additionalItems:
          typeof schema.additionalItems === "object" &&
          schema.additionalItems !== null
            ? omitEmptyRequiredDeep(schema.additionalItems)
            : schema.additionalItems,
      } satisfies OpenApi.IJsonSchema.ITuple);
    if (isArray(schema))
      return omitEmptyRequired({
        ...schema,
        items: omitEmptyRequiredDeep(schema.items),
      } satisfies OpenApi.IJsonSchema.IArray);
    if (isObject(schema))
      return omitEmptyRequired({
        ...schema,
        properties: schema.properties
          ? Object.fromEntries(
              Object.entries(schema.properties).map(([key, value]) => [
                key,
                omitEmptyRequiredDeep(value),
              ]),
            )
          : schema.properties,
        additionalProperties:
          typeof schema.additionalProperties === "object" &&
          schema.additionalProperties !== null
            ? omitEmptyRequiredDeep(schema.additionalProperties)
            : schema.additionalProperties,
      } satisfies OpenApi.IJsonSchema.IObject);
    return schema;
  };

  const isArray = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IArray =>
    (schema as OpenApi.IJsonSchema.IArray).type === "array" &&
    (schema as OpenApi.IJsonSchema.IArray).items !== undefined;

  const isTuple = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.ITuple =>
    (schema as OpenApi.IJsonSchema.ITuple).type === "array" &&
    Array.isArray((schema as OpenApi.IJsonSchema.ITuple).prefixItems);

  const isObject = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IObject =>
    (schema as OpenApi.IJsonSchema.IObject).type === "object";

  const isOneOf = (
    schema: OpenApi.IJsonSchema,
  ): schema is OpenApi.IJsonSchema.IOneOf =>
    Array.isArray((schema as OpenApi.IJsonSchema.IOneOf).oneOf);
}
