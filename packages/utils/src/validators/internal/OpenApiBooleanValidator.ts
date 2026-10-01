import { OpenApi } from "@typia/interface";

import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";

/**
 * Validates a value against a boolean schema.
 *
 * @evidence contracts/common.md#principled-implementation A boolean schema accepts exactly the two boolean values by `typeof`, which does not accept boxed booleans or the strings `true` and `false`; default and enum are not checked because the emended boolean carries only a default.
 * @evidence contracts/common.md#clear-and-simple-design One expression.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts A strict primitive test with no coercion.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment and function doc state the contract.
 */
export namespace OpenApiBooleanValidator {
  /**
   * Validate that the value is a boolean.
   *
   * @param ctx Validation context
   *
   * @returns Whether the value is a boolean
   *
   * @evidence contracts/common.md#principled-implementation The value passes when `typeof` is `boolean` and is otherwise reported with the context's expected name.
   * @evidence contracts/common.md#clear-and-simple-design One expression.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts No coercion of LLM strings; that belongs to the coercion step.
   * @evidence contracts/common.md#meaningful-documentation The doc states what the function does.
   */
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IBoolean>,
  ): boolean => {
    return typeof ctx.value === "boolean" || ctx.report(ctx);
  };
}
