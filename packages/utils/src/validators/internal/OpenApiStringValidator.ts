import { OpenApi } from "@typia/interface";

import { _isStringFormat } from "../functional/_isStringFormat";
import { _stringLength } from "../functional/_stringLength";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";

/**
 * Validates a value against a string schema.
 *
 * @evidence contracts/common.md#principled-implementation A string must be a string by `typeof`, its length is counted in code points through the shared helper only when a bound exists, and the length bounds, the pattern and the format are checked independently, so each violated constraint is reported. A format that is not registered is accepted. The pattern is compiled with `new RegExp` on every call and an invalid pattern throws instead of being reported.
 * @evidence contracts/common.md#clear-and-simple-design One function that builds the list of independent results.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The format dispatch is the registered table and the pattern comes from the schema; there is no fixture rule. The per-call regular expression construction is a stated cost and the invalid-pattern throw an unresolved limitation.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment and function doc state the contract.
 */
export namespace OpenApiStringValidator {
  /**
   * Validate that the value is a string whose length, pattern and format
   * satisfy the schema, reporting each violated constraint.
   *
   * @param ctx Validation context
   *
   * @returns Whether the value satisfies the schema
   *
   * @evidence contracts/common.md#principled-implementation Non-strings are reported with the plain expected name, and the combined result falls back to the plain report when any check failed, which the reporter suppresses because it has the same path as the specific report.
   * @evidence contracts/common.md#clear-and-simple-design One function.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The repeated report is intentional and removed by the reporter's related-path rule.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the function does.
   */
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IString>,
  ): boolean => {
    if (typeof ctx.value !== "string") return ctx.report(ctx);
    const length: number | null =
      ctx.schema.minLength !== undefined || ctx.schema.maxLength !== undefined
        ? _stringLength(ctx.value)
        : null;
    return (
      [
        ctx.schema.minLength !== undefined
          ? length! >= ctx.schema.minLength ||
            ctx.report({
              ...ctx,
              expected: `string & MinLength<${ctx.schema.minLength}>`,
            })
          : true,
        ctx.schema.maxLength !== undefined
          ? length! <= ctx.schema.maxLength ||
            ctx.report({
              ...ctx,
              expected: `string & MaxLength<${ctx.schema.maxLength}>`,
            })
          : true,
        ctx.schema.pattern !== undefined
          ? new RegExp(ctx.schema.pattern).test(ctx.value) ||
            ctx.report({
              ...ctx,
              expected: `string & Pattern<${JSON.stringify(ctx.schema.pattern)}>`,
            })
          : true,
        ctx.schema.format
          ? _isStringFormat(ctx.schema.format, ctx.value) ||
            ctx.report({
              ...ctx,
              expected: `string & Format<${JSON.stringify(ctx.schema.format)}>`,
            })
          : true,
      ].every((v) => v) || ctx.report(ctx)
    );
  };
}
