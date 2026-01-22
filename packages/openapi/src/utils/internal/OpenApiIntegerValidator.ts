import { OpenApi } from "../../OpenApi";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";

export namespace OpenApiIntegerValidator {
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IInteger>,
  ): boolean => {
    if (typeof ctx.value !== "number" || Math.floor(ctx.value) !== ctx.value)
      return ctx.report(ctx);
    return [
      ctx.schema.minimum !== undefined
        ? ctx.schema.exclusiveMinimum
          ? ctx.value > ctx.schema.minimum ||
            ctx.report({
              ...ctx,
              expected: `number & Type<"int32"> & ExclusiveMinimum<${ctx.schema.minimum}>`,
            })
          : ctx.value >= ctx.schema.minimum ||
            ctx.report({
              ...ctx,
              expected: `number & Type<"int32"> & Minimum<${ctx.schema.minimum}>`,
            })
        : true,
      ctx.schema.maximum !== undefined
        ? ctx.schema.exclusiveMaximum
          ? ctx.value < ctx.schema.maximum ||
            ctx.report({
              ...ctx,
              expected: `number & Type<"int32"> & ExclusiveMaximum<${ctx.schema.maximum}>`,
            })
          : ctx.value <= ctx.schema.maximum ||
            ctx.report({
              ...ctx,
              expected: `number & Type<"int32"> & Maximum<${ctx.schema.maximum}>`,
            })
        : true,
      ctx.schema.multipleOf !== undefined
        ? ctx.value % ctx.schema.multipleOf === 0 ||
          ctx.report({
            ...ctx,
            expected: `number & Type<"int32"> & MultipleOf<${ctx.schema.multipleOf}>`,
          })
        : true,
    ].every((v) => v);
  };
}
