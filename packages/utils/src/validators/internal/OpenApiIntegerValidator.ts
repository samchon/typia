import { OpenApi } from "@typia/interface";

import { _isMultipleOf } from "../functional/_isMultipleOf";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";

export namespace OpenApiIntegerValidator {
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IInteger>,
  ): boolean => {
    if (
      typeof ctx.value !== "number" ||
      Number.isFinite(ctx.value) === false ||
      Math.floor(ctx.value) !== ctx.value
    )
      return ctx.report(ctx);
    const type: string = describeType(ctx.schema);
    return [
      ctx.schema.minimum !== undefined
        ? ctx.value >= ctx.schema.minimum ||
          ctx.report({
            ...ctx,
            expected: `${type} & Minimum<${ctx.schema.minimum}>`,
          })
        : true,
      ctx.schema.maximum !== undefined
        ? ctx.value <= ctx.schema.maximum ||
          ctx.report({
            ...ctx,
            expected: `${type} & Maximum<${ctx.schema.maximum}>`,
          })
        : true,
      ctx.schema.exclusiveMinimum !== undefined
        ? ctx.value > ctx.schema.exclusiveMinimum ||
          ctx.report({
            ...ctx,
            expected: `${type} & ExclusiveMinimum<${ctx.schema.exclusiveMinimum}>`,
          })
        : true,
      ctx.schema.exclusiveMaximum !== undefined
        ? ctx.value < ctx.schema.exclusiveMaximum ||
          ctx.report({
            ...ctx,
            expected: `${type} & ExclusiveMaximum<${ctx.schema.exclusiveMaximum}>`,
          })
        : true,
      ctx.schema.multipleOf !== undefined
        ? _isMultipleOf(ctx.value, ctx.schema.multipleOf) ||
          ctx.report({
            ...ctx,
            expected: `${type} & MultipleOf<${ctx.schema.multipleOf}>`,
          })
        : true,
    ].every((v) => v);
  };

  /**
   * Name the integer type a schema declares, in typia's tag notation.
   *
   * Every bounds message used to hardcode `Type<"int32">`, so a plain `{ type:
   * "integer", minimum: 0 }` reported a 32-bit width the schema never stated.
   * The width has to come from the schema instead. OpenAPI spells it as
   * `format` (`"int32"` / `"int64"`), which the normalized schema type does not
   * model for integers — typia's own emitter writes a bare `{ type: "integer"
   * }` for `Type<"int32">` — but `OpenApiConverter` passes an external
   * document's `format` straight through, so it does reach this validator at
   * runtime. Read it defensively and echo only what is there, mirroring how
   * {@link OpenApiStringValidator} reports a string's `format`.
   */
  const describeType = (schema: OpenApi.IJsonSchema.IInteger): string => {
    const format: unknown = (schema as { format?: unknown }).format;
    return typeof format === "string"
      ? `number & Type<${JSON.stringify(format)}>`
      : "number";
  };
}
