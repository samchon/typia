import { OpenApi } from "@typia/interface";

import { _isUniqueItems } from "../functional/_isUniqueItems";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";
import { OpenApiStationValidator } from "./OpenApiStationValidator";

/**
 * Validates a value against a tuple schema.
 *
 * @evidence contracts/common.md#principled-implementation A tuple is an array whose length is at least the minimum (the prefix length by default), at most the maximum, with unique elements when required, and no longer than the prefix unless additional items are allowed; each position is then validated against its prefix schema or the additional items schema, and a hole or an `undefined` element is reported. Structural failures return at once, so the first violated length or uniqueness rule is the only one reported for the array.
 * @evidence contracts/common.md#clear-and-simple-design One function with the structural checks first and the per-element map after.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The rules are those of the emended tuple type and nothing is tuned to a document.
 * @evidence contracts/common.md#meaningful-documentation A namespace comment and function doc were added.
 */
export namespace OpenApiTupleValidator {
  /**
   * Validate that the value is an array whose length is within the bounds,
   * whose leading elements match the prefix schemas and whose extra elements
   * match the additional items schema, or are refused when none is declared.
   *
   * @param ctx Validation context
   *
   * @returns Whether the value satisfies the schema
   *
   * @evidence contracts/common.md#principled-implementation The array checks run in a fixed order and return at the first failure, then each element is validated at its index path, with `additionalItems` of `true` or a schema permitting extras and `false` or an absent value refusing them.
   * @evidence contracts/common.md#clear-and-simple-design One function.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The early return is a deliberate report policy.
   * @evidence contracts/common.md#meaningful-documentation A doc was added.
   */
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.ITuple>,
  ): boolean => {
    if (!Array.isArray(ctx.value)) return ctx.report(ctx);

    const array: unknown[] = ctx.value;
    const length: number = array.length;
    const minimum: number =
      ctx.schema.minItems ?? ctx.schema.prefixItems.length;
    if (length < minimum)
      return ctx.report({
        ...ctx,
        expected: `Array<> & MinItems<${minimum}>`,
      });
    if (ctx.schema.maxItems !== undefined && length > ctx.schema.maxItems)
      return ctx.report({
        ...ctx,
        expected: `Array<> & MaxItems<${ctx.schema.maxItems}>`,
      });
    if (ctx.schema.uniqueItems === true && !_isUniqueItems(array))
      return ctx.report({
        ...ctx,
        expected: "Array<> & UniqueItems",
      });
    if (
      length > ctx.schema.prefixItems.length &&
      (ctx.schema.additionalItems === false ||
        ctx.schema.additionalItems === undefined)
    )
      return ctx.report(ctx);

    return Array.from({ length }, (_, index) => {
      const schema: OpenApi.IJsonSchema | undefined =
        index < ctx.schema.prefixItems.length
          ? ctx.schema.prefixItems[index]
          : typeof ctx.schema.additionalItems === "object" &&
              ctx.schema.additionalItems !== null
            ? ctx.schema.additionalItems
            : undefined;
      const value: unknown = array[index];
      if (Object.hasOwn(array, index) === false || value === undefined)
        return ctx.report({
          ...ctx,
          value,
          path: `${ctx.path}[${index}]`,
        });
      return schema === undefined
        ? true
        : OpenApiStationValidator.validate({
            ...ctx,
            schema,
            value,
            path: `${ctx.path}[${index}]`,
            required: true,
          });
    }).every((value) => value);
  };
}
