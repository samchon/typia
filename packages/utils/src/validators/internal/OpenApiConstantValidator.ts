import { OpenApi } from "@typia/interface";

import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";

/**
 * Validates a value against a constant schema.
 *
 * @evidence contracts/common.md#principled-implementation A constant schema accepts exactly the value that is strictly equal to its `const`, which is correct for the boolean, number and string constants the type allows; `NaN` as a constant would never match, which the type cannot express anyway.
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
