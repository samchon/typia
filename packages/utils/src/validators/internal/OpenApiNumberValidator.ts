import { OpenApi } from "@typia/interface";

import { _isMultipleOf } from "../functional/_isMultipleOf";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";

export namespace OpenApiNumberValidator {
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
