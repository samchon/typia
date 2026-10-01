import { OpenApi } from "@typia/interface";

import { OpenApiReferenceKey } from "../../utils/internal/OpenApiReferenceKey";
import { OpenApiTypeChecker } from "../OpenApiTypeChecker";

/**
 * Names a schema in typia's type notation for validation messages.
 *
 * @evidence contracts/common.md#principled-implementation The expected type name is written in typia's tag notation (`number & tags.Minimum<3>`), reading each bound on its own value so a falsy bound such as 0 is not dropped, and echoing a `format` only where the validator reports it so the two cannot disagree. References use their component key, objects are named `__object`, and a union joins its members with a bar and parenthesizes intersections.
 * @evidence contracts/common.md#clear-and-simple-design One recursive function with small per-kind helpers that each build a list of tag strings.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Names are derived from the schema fields and no schema is special-cased; the pattern is omitted when a format is present, which mirrors how the string validator reports.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment and function doc state the contract, with comments on the integer format and number rules.
 */
export namespace OpenApiSchemaNamingRule {
  /**
   * Write the type name of a schema, such as `string & tags.MinLength<3>`.
   *
   * @param schema Schema to name
   * @param union Whether the name is a member of a union, which parenthesizes
   *   an intersection
   *
   * @returns Type name
   *
   * @evidence contracts/common.md#principled-implementation The kind dispatch mirrors the station validator, and tags are built only for constraints present; the uniqueness tag is written only when `uniqueItems` is true, since a false value imposes no constraint and the array validator does not report one.
   * @evidence contracts/common.md#clear-and-simple-design One function over per-kind helpers and a union flag.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts No consumer-specific names.
   * @evidence contracts/common.md#meaningful-documentation The doc names the parameters and result.
   */
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
      return OpenApiReferenceKey.read(schema.$ref) ?? schema.$ref;
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
    ...(schema.uniqueItems === true ? [`tags.UniqueItems`] : []),
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
