import { OpenApi } from "@typia/interface";

/**
 * Restores the open `any[]` form of an array schema that omits `items`.
 *
 * The emended `IArray` type demands `items`, but a hand-written or externally
 * parsed document can omit it, and JSON Schema reads `{ type: "array" }` as an
 * array of anything. `OpenApiTypeChecker.isArray` requires `items`, so such a
 * schema matched no checker and every downgrader collapsed it into `{}`, the
 * unconstrained schema (samchon/typia#2404). Downgraders pass each schema
 * through here before dispatching on its type.
 *
 * @internal
 */
export namespace OpenApiOpenArrayRestorer {
  /**
   * @param schema Schema to downgrade
   * @returns The same schema, or a copy with `items: {}` when it is an array
   *   that declares neither `items` nor `prefixItems`
   */
  export const restore = (schema: OpenApi.IJsonSchema): OpenApi.IJsonSchema => {
    const record = schema as Partial<
      OpenApi.IJsonSchema.IArray & OpenApi.IJsonSchema.ITuple
    >;
    return record.type === "array" &&
      record.items === undefined &&
      record.prefixItems === undefined
      ? ({ ...schema, items: {} } as OpenApi.IJsonSchema.IArray)
      : schema;
  };
}
