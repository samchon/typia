import { OpenApi } from "../../OpenApi";
import { NamingConvention } from "../NamingConvention";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";
import { OpenApiStationValidator } from "./OpenApiStationValidator";

export namespace OpenApiObjectValidator {
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IObject>,
  ): boolean => {
    if (typeof ctx.value !== "object" || ctx.value === null)
      return ctx.report(ctx);
    return [
      ...Object.entries(ctx.schema.properties ?? {}).map(([key, value]) =>
        OpenApiStationValidator.validate({
          ...ctx,
          schema: value,
          value: (ctx.value as Record<string, any>)[key],
          path:
            ctx.path +
            (NamingConvention.variable(key)
              ? `.${key}`
              : `[${JSON.stringify(key)}]`),
          required: ctx.schema.required?.includes(key) ?? false,
        }),
      ),
      ...(typeof ctx.schema.additionalProperties === "object" &&
      ctx.schema.additionalProperties !== null
        ? Object.entries(ctx.value)
            .filter(
              ([key]) =>
                Object.keys(ctx.schema.properties ?? {}).includes(key) ===
                false,
            )
            .map(([key, value]) =>
              OpenApiStationValidator.validate({
                ...ctx,
                schema: ctx.schema.additionalProperties as OpenApi.IJsonSchema,
                value,
                path:
                  ctx.path +
                  (NamingConvention.variable(key)
                    ? `.${key}`
                    : `[${JSON.stringify(key)}]`),
                required: true,
              }),
            )
        : []),
      ...(ctx.equals === true &&
      (ctx.schema.additionalProperties ?? false) === false
        ? [validateEquals(ctx)]
        : []),
    ].every((v) => v);
  };

  const validateEquals = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IObject>,
  ): boolean => {
    const regular: Set<string> = new Set(
      Object.keys(ctx.schema.properties ?? {}),
    );
    return Object.entries(ctx.value as object)
      .map(([key, value]) => {
        if (regular.has(key) === true) return true;
        return ctx.report({
          ...ctx,
          path:
            ctx.path +
            (NamingConvention.variable(key)
              ? `.${key}`
              : `[${JSON.stringify(key)}]`),
          value,
          expected: "undefined",
          description: [
            `The property \`${key}\` is not defined in the object type.`,
            "",
            "Please remove the property next time.",
          ].join("\n"),
        });
      })
      .every((v) => v);
  };
}
