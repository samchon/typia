import { OpenApi } from "@typia/interface";

import { _isStringFormat } from "../functional/_isStringFormat";
import { _stringLength } from "../functional/_stringLength";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";

export namespace OpenApiStringValidator {
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IString>,
  ): boolean => {
    if (typeof ctx.value !== "string") return ctx.report(ctx);
    const length: number = _stringLength(ctx.value);
    return (
      [
        ctx.schema.minLength !== undefined
          ? length >= ctx.schema.minLength ||
            ctx.report({
              ...ctx,
              expected: `string & MinLength<${ctx.schema.minLength}>`,
            })
          : true,
        ctx.schema.maxLength !== undefined
          ? length <= ctx.schema.maxLength ||
            ctx.report({
              ...ctx,
              expected: `string & MaxLength<${ctx.schema.maxLength}>`,
            })
          : true,
        ctx.schema.pattern !== undefined
          ? new RegExp(ctx.schema.pattern).test(ctx.value) ||
            ctx.report({
              ...ctx,
              expected: `string & Pattern<${JSON.stringify(ctx.schema.pattern)}>`,
            })
          : true,
        ctx.schema.format
          ? _isStringFormat(ctx.schema.format, ctx.value) ||
            ctx.report({
              ...ctx,
              expected: `string & Format<${JSON.stringify(ctx.schema.format)}>`,
            })
          : true,
      ].every((v) => v) || ctx.report(ctx)
    );
  };
}
