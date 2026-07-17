import { OpenApi } from "@typia/interface";

import { OpenApiTypeChecker } from "../OpenApiTypeChecker";

export namespace OpenApiSchemaNamingRule {
  export const getName = (
    schema: OpenApi.IJsonSchema,
    union: boolean = false,
  ): string => {
    // COALESCE
    if (OpenApiTypeChecker.isUnknown(schema)) return "unknown";
    else if (OpenApiTypeChecker.isNull(schema)) return "null";
    else if (OpenApiTypeChecker.isOneOf(schema))
      return schema.oneOf.map((child) => getName(child, true)).join(" | ");
    // ATOMICS
    else if (OpenApiTypeChecker.isConstant(schema))
      return JSON.stringify(schema.const);
    else if (OpenApiTypeChecker.isBoolean(schema)) return "boolean";
    else if (OpenApiTypeChecker.isInteger(schema))
      return joinIntersection(getNameOfInteger(schema), union);
    else if (OpenApiTypeChecker.isNumber(schema))
      return joinIntersection(getNameOfNumber(schema), union);
    else if (OpenApiTypeChecker.isString(schema))
      return joinIntersection(getNameOfString(schema), union);
    // INSTANCES
    else if (OpenApiTypeChecker.isReference(schema))
      return schema.$ref.split("/").pop() ?? "unknown";
    else if (OpenApiTypeChecker.isObject(schema)) return "__object";
    else if (OpenApiTypeChecker.isArray(schema))
      return joinIntersection(getNameOfArray(schema), union);
    else if (OpenApiTypeChecker.isTuple(schema)) return getNameOfTuple(schema);
    return "unknown";
  };

  const getNameOfInteger = (schema: OpenApi.IJsonSchema.IInteger): string[] => {
    // `minimum`, `maximum`, `exclusiveMinimum`, and `exclusiveMaximum` are all
    // numbers in the declaration, each an independent bound rather than a
    // boolean modifier on another. Read every one on its own value, so an
    // exclusive bound is never dropped (including the falsy `0`) nor labeled
    // with a sibling's value.
    //
    // The normalized integer schema does not model `format`, but
    // `OpenApiConverter` passes an external document's `format` (`"int32"` /
    // `"int64"`) straight through, so read it defensively and echo only what is
    // there as `tags.Type<...>` — mirroring `OpenApiIntegerValidator.describeType`,
    // which names the same declared width and invents none.
    const format: unknown = (schema as { format?: unknown }).format;
    return [
      "number",
      ...(typeof format === "string"
        ? [`tags.Type<${JSON.stringify(format)}>`]
        : []),
      ...(schema.minimum !== undefined
        ? [`tags.Minimum<${schema.minimum}>`]
        : []),
      ...(schema.exclusiveMinimum !== undefined
        ? [`tags.ExclusiveMinimum<${schema.exclusiveMinimum}>`]
        : []),
      ...(schema.maximum !== undefined
        ? [`tags.Maximum<${schema.maximum}>`]
        : []),
      ...(schema.exclusiveMaximum !== undefined
        ? [`tags.ExclusiveMaximum<${schema.exclusiveMaximum}>`]
        : []),
      ...(schema.multipleOf !== undefined
        ? [`tags.MultipleOf<${schema.multipleOf}>`]
        : []),
    ];
  };

  // Read each numeric bound on its own value, as in `getNameOfInteger`. Unlike
  // integers, no `format` is echoed: `OpenApiNumberValidator` reports a bare
  // `number & ...` and never names a number's `format`, so echoing one here
  // would disagree with the validator on what the schema declares.
  const getNameOfNumber = (schema: OpenApi.IJsonSchema.INumber): string[] => [
    "number",
    ...(schema.minimum !== undefined
      ? [`tags.Minimum<${schema.minimum}>`]
      : []),
    ...(schema.exclusiveMinimum !== undefined
      ? [`tags.ExclusiveMinimum<${schema.exclusiveMinimum}>`]
      : []),
    ...(schema.maximum !== undefined
      ? [`tags.Maximum<${schema.maximum}>`]
      : []),
    ...(schema.exclusiveMaximum !== undefined
      ? [`tags.ExclusiveMaximum<${schema.exclusiveMaximum}>`]
      : []),
    ...(schema.multipleOf !== undefined
      ? [`tags.MultipleOf<${schema.multipleOf}>`]
      : []),
  ];

  const getNameOfString = (schema: OpenApi.IJsonSchema.IString): string[] => [
    "string",
    ...(schema.format !== undefined
      ? [`tags.Format<${JSON.stringify(schema.format)}>`]
      : []),
    ...(schema.pattern !== undefined && schema.format === undefined
      ? [`tags.Pattern<${JSON.stringify(schema.pattern)}>`]
      : []),
    ...(schema.contentMediaType !== undefined
      ? [`tags.ContentMediaType<${JSON.stringify(schema.contentMediaType)}>`]
      : []),
    ...(schema.minLength !== undefined
      ? [`tags.MinLength<${schema.minLength}>`]
      : []),
    ...(schema.maxLength !== undefined
      ? [`tags.MaxLength<${schema.maxLength}>`]
      : []),
  ];

  const getNameOfArray = (schema: OpenApi.IJsonSchema.IArray): string[] => [
    `Array<${getName(schema.items)}>`,
    ...(schema.minItems !== undefined
      ? [`tags.MinItems<${schema.minItems}>`]
      : []),
    ...(schema.maxItems !== undefined
      ? [`tags.MaxItems<${schema.maxItems}>`]
      : []),
    ...(schema.uniqueItems !== undefined ? [`tags.UniqueItems`] : []),
  ];

  const getNameOfTuple = (schema: OpenApi.IJsonSchema.ITuple): string =>
    "[" +
    [
      ...schema.prefixItems.map((child) => getName(child)),
      ...(schema.additionalItems === true
        ? ["...Array<unknown>"]
        : typeof schema.additionalItems === "object" &&
            schema.additionalItems !== null
          ? [`...Array<${getName(schema.additionalItems)}>`]
          : []),
    ].join(", ") +
    "]";

  const joinIntersection = (elements: string[], union: boolean): string => {
    const str: string = elements.join(" & ");
    return union ? `(${str})` : str;
  };
}
