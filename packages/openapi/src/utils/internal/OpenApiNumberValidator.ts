import { OpenApi } from "../../OpenApi";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";

export namespace OpenApiNumberValidator {
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.INumber>,
  ): boolean => {
    if (typeof ctx.value !== "number") return ctx.report(ctx);
    return [
      ctx.schema.minimum !== undefined
        ? ctx.schema.exclusiveMinimum
          ? ctx.value > ctx.schema.minimum ||
            ctx.report({
              ...ctx,
              expected: `number & ExclusiveMinimum<${ctx.schema.minimum}>`,
            })
          : ctx.value >= ctx.schema.minimum ||
            ctx.report({
              ...ctx,
              expected: `number & Minimum<${ctx.schema.minimum}>`,
            })
        : true,
      ctx.schema.maximum !== undefined
        ? ctx.schema.exclusiveMaximum
          ? ctx.value < ctx.schema.maximum ||
            ctx.report({
              ...ctx,
              expected: `number & ExclusiveMaximum<${ctx.schema.maximum}>`,
            })
          : ctx.value <= ctx.schema.maximum ||
            ctx.report({
              ...ctx,
              expected: `number & Maximum<${ctx.schema.maximum}>`,
            })
        : true,
      ctx.schema.multipleOf !== undefined
        ? ctx.value % ctx.schema.multipleOf === 0 ||
          ctx.report({
            ...ctx,
            expected: `number & MultipleOf<${ctx.schema.multipleOf}>`,
          })
        : true,
    ].every((v) => v);
  };
}
