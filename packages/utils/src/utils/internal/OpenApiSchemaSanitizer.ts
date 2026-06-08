/** @internal */
export namespace OpenApiSchemaSanitizer {
  export const omitEmptyRequired = <
    Schema extends {
      required?: unknown[];
    },
  >(
    schema: Schema,
  ): Schema => {
    if (
      Object.prototype.hasOwnProperty.call(schema, "required") &&
      (schema.required === undefined ||
        (Array.isArray(schema.required) && schema.required.length === 0))
    ) {
      const { required: _required, ...rest } = schema;
      return rest as Schema;
    }
    return schema;
  };
}
