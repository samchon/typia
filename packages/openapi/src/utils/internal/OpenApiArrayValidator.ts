import { OpenApi } from "../../OpenApi";
import { _isUniqueItems } from "../../functional/_isUniqueItems";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";
import { OpenApiStationValidator } from "./OpenApiStationValidator";

export namespace OpenApiArrayValidator {
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IArray>,
  ): boolean => {
    if (Array.isArray(ctx.value) === false) return ctx.report(ctx);
    return [
      ctx.value
        .map((value, i) =>
          OpenApiStationValidator.validate({
            ...ctx,
            schema: ctx.schema.items,
            value,
            path: `${ctx.path}[${i}]`,
            required: true,
          }),
        )
        .every((v) => v),
      ctx.schema.minItems !== undefined
        ? ctx.value.length >= ctx.schema.minItems ||
          ctx.report({
            ...ctx,
            expected: `Array<> & MinItems<${ctx.schema.minItems}>`,
          })
        : true,
      ctx.schema.maxItems !== undefined
        ? ctx.value.length <= ctx.schema.maxItems ||
          ctx.report({
            ...ctx,
            expected: `Array<> & MaxItems<${ctx.schema.maxItems}>`,
          })
        : true,
      ctx.schema.uniqueItems !== undefined
        ? ctx.schema.uniqueItems
          ? _isUniqueItems(ctx.value) ||
            ctx.report({
              ...ctx,
              expected: `Array<> & UniqueItems`,
            })
          : true
        : true,
    ].every((v) => v);
  };
}
