import { OpenApi } from "@typia/interface";

/**
 * Normalizes an emended schema that entered from outside the upgraders.
 *
 * The upgraders emit every emended shape exactly, but a document built by hand
 * or parsed from JSON reaches the consumers on its own claim of being emended.
 * The two shapes such a document may leave loose are repaired here, once, at
 * the boundary, so no consumer dispatch checks for them:
 *
 * - `required: []` or `required: undefined` on an object, which the emended
 *   format omits;
 * - An array with neither `items` nor `prefixItems`, which JSON Schema reads as
 *   an array of anything and the emended `IArray` spells `items: {}`
 *   (samchon/typia#2392, samchon/typia#2412).
 *
 * @internal
 */
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

  /**
   * The open `any[]` form of an array that omits `items` and `prefixItems`.
   *
   * @param schema Schema about to be walked
   * @returns The same schema, or a copy with `items: {}`
   */
  export const fillOpenArray = (
    schema: OpenApi.IJsonSchema,
  ): OpenApi.IJsonSchema => {
    const record = schema as Partial<
      OpenApi.IJsonSchema.IArray & OpenApi.IJsonSchema.ITuple
    >;
    return record.type === "array" &&
      record.items === undefined &&
      record.prefixItems === undefined
      ? ({ ...schema, items: {} } as OpenApi.IJsonSchema.IArray)
      : schema;
  };

  /** Every normalization, applied to the schema and each schema it holds. */
  export const normalizeDeep = (
    input: OpenApi.IJsonSchema,
  ): OpenApi.IJsonSchema => {
    const schema: OpenApi.IJsonSchema = fillOpenArray(input);
    if (isOneOf(schema))
      return omitEmptyRequired({
        ...schema,
        oneOf: schema.oneOf.map(normalizeDeep) as OpenApi.IJsonSchema[],
      } satisfies OpenApi.IJsonSchema.IOneOf);
    if (isTuple(schema))
      return omitEmptyRequired({
        ...schema,
        prefixItems: schema.prefixItems.map(normalizeDeep),
        additionalItems:
          typeof schema.additionalItems === "object" &&
          schema.additionalItems !== null
            ? normalizeDeep(schema.additionalItems)
            : schema.additionalItems,
      } satisfies OpenApi.IJsonSchema.ITuple);
    if (isArray(schema))
      return omitEmptyRequired({
        ...schema,
        items: normalizeDeep(schema.items),
      } satisfies OpenApi.IJsonSchema.IArray);
    if (isObject(schema))
      return omitEmptyRequired({
        ...schema,
        properties: schema.properties
          ? Object.fromEntries(
              Object.entries(schema.properties).map(([key, value]) => [
                key,
                normalizeDeep(value),
              ]),
            )
          : schema.properties,
        additionalProperties:
          typeof schema.additionalProperties === "object" &&
          schema.additionalProperties !== null
            ? normalizeDeep(schema.additionalProperties)
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
