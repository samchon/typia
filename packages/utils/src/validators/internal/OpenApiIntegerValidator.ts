import { OpenApi } from "@typia/interface";

import { _isMultipleOf } from "../functional/_isMultipleOf";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";

/**
 * Validates a value against an integer schema.
 *
 * @evidence contracts/common.md#principled-implementation An integer is a finite number equal to its floor, then the inclusive and exclusive bounds and the divisor are checked independently so every violated constraint is reported; the divisor test uses the decimal comparison, so `multipleOf: 0.1` behaves as written. The reported type name echoes a `format` width only when the converted document carried one.
 * @evidence contracts/common.md#clear-and-simple-design One function and a private naming helper whose rule matches the naming rule module.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The width is read from the schema and not assumed, as the helper comment records for the earlier hardcoded one.
 * @evidence contracts/common.md#meaningful-documentation A namespace comment and function doc were added, and the helper explains the format echo.
 */
export namespace OpenApiIntegerValidator {
  /**
   * Validate that the value is a finite whole number and satisfies the bounds
   * and the divisor, reporting each violated constraint.
   *
   * @param ctx Validation context
   *
   * @returns Whether the value satisfies the schema
   *
   * @evidence contracts/common.md#principled-implementation Non-numbers, non-finite numbers and fractions are reported with the plain expected name; each bound and the divisor then produce their own messages with the type name.
   * @evidence contracts/common.md#clear-and-simple-design One function listing the five checks.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts No tolerance values are used.
   * @evidence contracts/common.md#meaningful-documentation A doc was added.
   */
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
