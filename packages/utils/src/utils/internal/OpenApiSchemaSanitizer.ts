import { OpenApi } from "@typia/interface";

/**
 * Shape rules over emended schemas.
 *
 * Two rules live here, with different owners:
 *
 * - {@link fillOpenArray}: an array with neither `items` nor `prefixItems`, which
 *   JSON Schema reads as an array of anything and the emended `IArray` spells
 *   `items: {}`. The upgraders emit that form; a document built by hand or
 *   parsed from JSON reaches the converters on its own claim of being emended,
 *   so {@link fillOpenArrayDeep} repairs it once at that boundary and no
 *   consumer dispatch checks for the shape (samchon/typia#2392,
 *   samchon/typia#2412).
 * - {@link omitEmptyRequired}: an empty `required` on an object a consumer emits.
 *   Version conversion preserves an explicit empty `required`, so this is an
 *   emission rule of the emitters that call it, never a boundary one.
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

  /** {@link fillOpenArray} over the schema and each schema it holds. */
  export const fillOpenArrayDeep = (
    input: OpenApi.IJsonSchema,
  ): OpenApi.IJsonSchema => walk(input, fillOpenArray, fillOpenArrayDeep);

  /** {@link omitEmptyRequired} over the schema and each schema it holds. */
  export const omitEmptyRequiredDeep = (
    input: OpenApi.IJsonSchema,
  ): OpenApi.IJsonSchema =>
    walk(input, omitEmptyRequired, omitEmptyRequiredDeep);

  /**
   * One rule over a schema and, through `next`, each schema it holds.
   *
   * A document may hold an absent schema where the type promises one, such as a
   * property value of `undefined`; it is left for the reader to judge.
   */
  const walk = (
    input: OpenApi.IJsonSchema,
    rule: (schema: OpenApi.IJsonSchema) => OpenApi.IJsonSchema,
    next: (schema: OpenApi.IJsonSchema) => OpenApi.IJsonSchema,
  ): OpenApi.IJsonSchema => {
    if (input === undefined) return input;
    const schema: OpenApi.IJsonSchema = rule(input);
    if (isOneOf(schema))
      return {
        ...schema,
        oneOf: schema.oneOf.map(next) as OpenApi.IJsonSchema[],
      } satisfies OpenApi.IJsonSchema.IOneOf;
    if (isTuple(schema))
      return {
        ...schema,
        prefixItems: schema.prefixItems.map(next),
        additionalItems:
          typeof schema.additionalItems === "object" &&
          schema.additionalItems !== null
            ? next(schema.additionalItems)
            : schema.additionalItems,
      } satisfies OpenApi.IJsonSchema.ITuple;
    if (isArray(schema))
      return {
        ...schema,
        items: next(schema.items),
      } satisfies OpenApi.IJsonSchema.IArray;
    if (isObject(schema))
      return {
        ...schema,
        properties: schema.properties
          ? Object.fromEntries(
              Object.entries(schema.properties).map(([key, value]) => [
                key,
                next(value),
              ]),
            )
          : schema.properties,
        additionalProperties:
          typeof schema.additionalProperties === "object" &&
          schema.additionalProperties !== null
            ? next(schema.additionalProperties)
            : schema.additionalProperties,
      } satisfies OpenApi.IJsonSchema.IObject;
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
