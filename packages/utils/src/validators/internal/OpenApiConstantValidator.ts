import { OpenApi } from "@typia/interface";

import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";

/**
 * Validates a value against a constant schema.
 *
 * @evidence contracts/common.md#principled-implementation Strict equality implements the boolean, string and finite JSON-number constants of an emended schema without coercion. TypeScript's number type also admits NaN, but NaN is not a JSON constant and would never match; this predicate does not validate the schema itself.
 * @evidence contracts/common.md#clear-and-simple-design One expression.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Strict equality with no coercion.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment and function doc state the contract.
 */
export namespace OpenApiConstantValidator {
  /**
   * Validate that the value is strictly equal to the constant.
   *
   * @param ctx Validation context
   *
   * @returns Whether the value equals the constant
   *
   * @evidence contracts/common.md#principled-implementation The value passes only when it is `===` to the constant, and is otherwise reported with the expected name.
   * @evidence contracts/common.md#clear-and-simple-design One expression.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts No coercion.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the function does.
   */
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IConstant>,
  ): boolean => {
    return ctx.value === ctx.schema.const || ctx.report(ctx);
  };
}
