import { OpenApi } from "@typia/interface";

import { _isUniqueItems } from "../functional/_isUniqueItems";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";
import { OpenApiStationValidator } from "./OpenApiStationValidator";

/**
 * Validates a value against an array schema.
 *
 * @evidence contracts/common.md#principled-implementation A value must be an array, then the length bounds, the uniqueness flag and every element against the item schema are checked, with all results combined so each violation is reported; the element path is the index, and elements are validated as required.
 * @evidence contracts/common.md#clear-and-simple-design One function that evaluates the independent checks as an array of results, so one failure does not hide another.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Constraints come from the schema and no case is special.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment and function doc state the contract.
 */
export namespace OpenApiArrayValidator {
  /**
   * Validate the value as an array: its length bounds, its uniqueness when
   * required and every element against the item schema.
   *
   * @param ctx Validation context
   *
   * @returns Whether the value satisfies the schema
   *
   * @evidence contracts/common.md#principled-implementation A non-array is reported with the array expected type; the bounds and uniqueness failures use `Array<>` expected names, and uniqueness uses the shared deep comparison, whose cost is quadratic in the number of elements.
   * @evidence contracts/common.md#clear-and-simple-design One function.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The `Array<>` name is a reporting convention and not a type check.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the function does.
   */
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IArray>,
  ): boolean => {
    if (Array.isArray(ctx.value) === false) return ctx.report(ctx);
    return [
      ctx.schema.minItems !== undefined
        ? ctx.value.length >= ctx.schema.minItems ||
          ctx.report({
            ...ctx,
            expected: `Array<> & MinItems<${ctx.schema.minItems}>`,
          })
        : true,
      ctx.schema.maxItems !== undefined
        ? ctx.value.length <= ctx.schema.maxItems ||
          ctx.report({
            ...ctx,
            expected: `Array<> & MaxItems<${ctx.schema.maxItems}>`,
          })
        : true,
      ctx.schema.uniqueItems !== undefined
        ? ctx.schema.uniqueItems
          ? _isUniqueItems(ctx.value) ||
            ctx.report({
              ...ctx,
              expected: `Array<> & UniqueItems`,
            })
          : true
        : true,
      ctx.value
        .map((value, i) =>
          OpenApiStationValidator.validate({
            ...ctx,
            schema: ctx.schema.items,
            value,
            path: `${ctx.path}[${i}]`,
            required: true,
          }),
        )
        .every((v) => v),
    ].every((v) => v);
  };
}
