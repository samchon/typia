import { OpenApi } from "@typia/interface";

import { _isMultipleOf } from "../functional/_isMultipleOf";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";

/**
 * Validates a value against a number schema.
 *
 * @evidence contracts/common.md#principled-implementation A number is a finite value, so `NaN` and the infinities are rejected, then the bounds and divisor are checked independently with the decimal multiple test.
 * @evidence contracts/common.md#clear-and-simple-design One function mirroring the integer validator without the width and floor test.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts No tolerance values are used.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment and function doc state the contract.
 */
export namespace OpenApiNumberValidator {
  /**
   * Validate that the value is a finite number and satisfies the bounds and the
   * divisor, reporting each violated constraint.
   *
   * @param ctx Validation context
   *
   * @returns Whether the value satisfies the schema
   *
   * @evidence contracts/common.md#principled-implementation Non-numbers and non-finite numbers are reported with the plain expected name; each bound and the divisor then produce their own messages.
   * @evidence contracts/common.md#clear-and-simple-design One function listing the five checks.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts No tolerance values are used.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the function does.
   */
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.INumber>,
  ): boolean => {
    if (typeof ctx.value !== "number" || Number.isFinite(ctx.value) === false)
      return ctx.report(ctx);
    return [
      ctx.schema.minimum !== undefined
        ? ctx.value >= ctx.schema.minimum ||
          ctx.report({
            ...ctx,
            expected: `number & Minimum<${ctx.schema.minimum}>`,
          })
        : true,
      ctx.schema.maximum !== undefined
        ? ctx.value <= ctx.schema.maximum ||
          ctx.report({
            ...ctx,
            expected: `number & Maximum<${ctx.schema.maximum}>`,
          })
        : true,
      ctx.schema.exclusiveMinimum !== undefined
        ? ctx.value > ctx.schema.exclusiveMinimum ||
          ctx.report({
            ...ctx,
            expected: `number & ExclusiveMinimum<${ctx.schema.exclusiveMinimum}>`,
          })
        : true,
      ctx.schema.exclusiveMaximum !== undefined
        ? ctx.value < ctx.schema.exclusiveMaximum ||
          ctx.report({
            ...ctx,
            expected: `number & ExclusiveMaximum<${ctx.schema.exclusiveMaximum}>`,
          })
        : true,
      ctx.schema.multipleOf !== undefined
        ? _isMultipleOf(ctx.value, ctx.schema.multipleOf) ||
          ctx.report({
            ...ctx,
            expected: `number & MultipleOf<${ctx.schema.multipleOf}>`,
          })
        : true,
    ].every((v) => v);
  };
}
