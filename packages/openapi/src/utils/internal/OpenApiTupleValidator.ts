import { OpenApi } from "../../OpenApi";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";
import { OpenApiStationValidator } from "./OpenApiStationValidator";

export namespace OpenApiTupleValidator {
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.ITuple>,
  ): boolean => {
    if (!Array.isArray(ctx.value)) return ctx.report(ctx);
    else if (!!ctx.schema.additionalItems === false) {
      if (ctx.value.length !== ctx.schema.prefixItems.length)
        return ctx.report(ctx);
      return ctx.value
        .map((v, i) =>
          OpenApiStationValidator.validate({
            ...ctx,
            schema: ctx.schema.prefixItems[i],
            value: v,
            path: `${ctx.path}[${i}]`,
          }),
        )
        .every((v) => v);
    }

    if (ctx.value.length < ctx.schema.prefixItems.length)
      return ctx.report(ctx);
    const next =
      typeof ctx.schema.additionalItems === "object" &&
      ctx.schema.additionalItems !== null
        ? (v: unknown, i: number) =>
            OpenApiStationValidator.validate({
              ...ctx,
              schema: ctx.schema.additionalItems as OpenApi.IJsonSchema,
              value: v,
              path: `${ctx.path}[${i}]`,
            })
        : () => true;
    return (
      ctx.value.length >= ctx.schema.prefixItems.length &&
      ctx.value
        .map((v, i) =>
          i < ctx.schema.prefixItems.length
            ? OpenApiStationValidator.validate({
                ...ctx,
                schema: ctx.schema.prefixItems[i],
                value: v,
                path: `${ctx.path}[${i}]`,
              })
            : next(v, i),
        )
        .every((v) => v)
    );
  };
}
