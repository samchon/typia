import { OpenApi } from "@typia/interface";

import { _isUniqueItems } from "../functional/_isUniqueItems";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";
import { OpenApiStationValidator } from "./OpenApiStationValidator";

export namespace OpenApiTupleValidator {
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.ITuple>,
  ): boolean => {
    if (!Array.isArray(ctx.value)) return ctx.report(ctx);

    const array: unknown[] = ctx.value;
    const length: number = array.length;
    if (ctx.schema.minItems !== undefined && length < ctx.schema.minItems)
      return ctx.report({
        ...ctx,
        expected: `Array<> & MinItems<${ctx.schema.minItems}>`,
      });
    if (ctx.schema.maxItems !== undefined && length > ctx.schema.maxItems)
      return ctx.report({
        ...ctx,
        expected: `Array<> & MaxItems<${ctx.schema.maxItems}>`,
      });
    if (ctx.schema.uniqueItems === true && !_isUniqueItems(array))
      return ctx.report({
        ...ctx,
        expected: "Array<> & UniqueItems",
      });
    if (
      length > ctx.schema.prefixItems.length &&
      (ctx.schema.additionalItems === false ||
        ctx.schema.additionalItems === undefined)
    )
      return ctx.report(ctx);

    return Array.from({ length }, (_, index) => {
      const value: unknown = array[index];
      const schema: OpenApi.IJsonSchema | undefined =
        index < ctx.schema.prefixItems.length
          ? ctx.schema.prefixItems[index]
          : typeof ctx.schema.additionalItems === "object" &&
              ctx.schema.additionalItems !== null
            ? ctx.schema.additionalItems
            : undefined;
      return schema === undefined
        ? true
        : OpenApiStationValidator.validate({
            ...ctx,
            schema,
            value,
            path: `${ctx.path}[${index}]`,
            required: true,
          });
    }).every((value) => value);
  };
}
