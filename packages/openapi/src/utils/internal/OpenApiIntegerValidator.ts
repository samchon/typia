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
        ? ctx.value >= ctx.schema.minimum ||
          ctx.report({
            ...ctx,
            expected: `number & Type<"int32"> & Minimum<${ctx.schema.minimum}>`,
          })
        : true,
      ctx.schema.maximum !== undefined
        ? ctx.value <= ctx.schema.maximum ||
          ctx.report({
            ...ctx,
            expected: `number & Type<"int32"> & Maximum<${ctx.schema.maximum}>`,
          })
        : true,
      ctx.schema.exclusiveMinimum !== undefined
        ? ctx.value > ctx.schema.exclusiveMinimum ||
          ctx.report({
            ...ctx,
            expected: `number & Type<"int32"> & ExclusiveMinimum<${ctx.schema.exclusiveMinimum}>`,
          })
        : true,
      ctx.schema.exclusiveMaximum !== undefined
        ? ctx.value < ctx.schema.exclusiveMaximum ||
          ctx.report({
            ...ctx,
            expected: `number & Type<"int32"> & ExclusiveMaximum<${ctx.schema.exclusiveMaximum}>`,
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
