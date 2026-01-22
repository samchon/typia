import { OpenApi } from "../../OpenApi";
import { OpenApiTypeChecker } from "../OpenApiTypeChecker";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";
import { OpenApiArrayValidator } from "./OpenApiArrayValidator";
import { OpenApiBooleanValidator } from "./OpenApiBooleanValidator";
import { OpenApiConstantValidator } from "./OpenApiConstantValidator";
import { OpenApiIntegerValidator } from "./OpenApiIntegerValidator";
import { OpenApiNumberValidator } from "./OpenApiNumberValidator";
import { OpenApiObjectValidator } from "./OpenApiObjectValidator";
import { OpenApiOneOfValidator } from "./OpenApiOneOfValidator";
import { OpenApiSchemaNamingRule } from "./OpenApiSchemaNamingRule";
import { OpenApiStringValidator } from "./OpenApiStringValidator";
import { OpenApiTupleValidator } from "./OpenApiTupleValidator";

export namespace OpenApiStationValidator {
  export const validate = (
    ctx: Omit<IOpenApiValidatorContext<OpenApi.IJsonSchema>, "expected">,
    expected?: string,
  ): boolean => {
    // THE TYPE NAME
    expected ??= (() => {
      const name = OpenApiSchemaNamingRule.getName(ctx.schema);
      return ctx.required ? name : `${name} | undefined`;
    })();

    // COALESCE
    if (OpenApiTypeChecker.isUnknown(ctx.schema)) return true;
    else if (ctx.value === undefined)
      return (
        ctx.required === false ||
        ctx.report({
          ...ctx,
          expected,
        })
      );
    else if (OpenApiTypeChecker.isNull(ctx.schema))
      return (
        ctx.value === null ||
        ctx.report({
          ...ctx,
          expected,
        })
      );
    // NESTED
    else if (OpenApiTypeChecker.isReference(ctx.schema)) {
      const schema: OpenApi.IJsonSchema | undefined =
        ctx.components.schemas?.[ctx.schema.$ref.split("/").pop() ?? ""];
      if (schema === undefined) return true;
      return OpenApiStationValidator.validate(
        {
          ...ctx,
          schema,
        },
        expected,
      );
    } else if (OpenApiTypeChecker.isOneOf(ctx.schema))
      return OpenApiOneOfValidator.validate({
        ...ctx,
        schema: ctx.schema,
        expected,
      });
    // ATOMICS
    else if (OpenApiTypeChecker.isConstant(ctx.schema))
      return OpenApiConstantValidator.validate({
        ...ctx,
        schema: ctx.schema,
        expected,
      });
    else if (OpenApiTypeChecker.isBoolean(ctx.schema))
      return OpenApiBooleanValidator.validate({
        ...ctx,
        schema: ctx.schema,
        expected,
      });
    else if (OpenApiTypeChecker.isInteger(ctx.schema))
      return OpenApiIntegerValidator.validate({
        ...ctx,
        schema: ctx.schema,
        expected,
      });
    else if (OpenApiTypeChecker.isNumber(ctx.schema))
      return OpenApiNumberValidator.validate({
        ...ctx,
        schema: ctx.schema,
        expected,
      });
    else if (OpenApiTypeChecker.isString(ctx.schema))
      return OpenApiStringValidator.validate({
        ...ctx,
        schema: ctx.schema,
        expected,
      });
    // INSTANCES
    else if (OpenApiTypeChecker.isArray(ctx.schema))
      return OpenApiArrayValidator.validate({
        ...ctx,
        schema: ctx.schema,
        expected,
      });
    else if (OpenApiTypeChecker.isTuple(ctx.schema))
      return OpenApiTupleValidator.validate({
        ...ctx,
        schema: ctx.schema,
        expected,
      });
    else if (OpenApiTypeChecker.isObject(ctx.schema))
      return OpenApiObjectValidator.validate({
        ...ctx,
        schema: ctx.schema,
        expected,
      });
    return true;
  };
}
