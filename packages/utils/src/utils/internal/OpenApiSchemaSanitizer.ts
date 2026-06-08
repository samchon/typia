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
}
