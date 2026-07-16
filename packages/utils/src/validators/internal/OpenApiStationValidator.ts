import { OpenApi } from "@typia/interface";

import { LlmReference } from "../../utils/internal/LlmReference";
import { ObjectDictionary } from "../../utils/internal/ObjectDictionary";
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
    references: ReadonlySet<string> = new Set(),
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
      let schema: OpenApi.IJsonSchema = ctx.schema;
      const visited: Set<string> = new Set(references);
      while (OpenApiTypeChecker.isReference(schema)) {
        const key: string | undefined = LlmReference.readOpenApi(schema.$ref);
        if (key === undefined)
          return ctx.report({
            ...ctx,
            expected,
            description: `Malformed schema reference ${JSON.stringify(schema.$ref)}.`,
          });
        if (visited.has(key))
          return ctx.report({
            ...ctx,
            expected,
            description: `Circular schema reference ${JSON.stringify(key)} cannot be resolved.`,
          });
        visited.add(key);
        const found: OpenApi.IJsonSchema | undefined = ObjectDictionary.get(
          ctx.components.schemas,
          key,
        );
        if (found === undefined)
          return ctx.report({
            ...ctx,
            expected,
            description: `Unable to resolve schema reference ${JSON.stringify(key)}.`,
          });
        schema = found;
      }
      return OpenApiStationValidator.validate(
        { ...ctx, schema },
        expected,
        visited,
      );
    } else if (OpenApiTypeChecker.isOneOf(ctx.schema))
      return OpenApiOneOfValidator.validate(
        {
          ...ctx,
          schema: ctx.schema,
          expected,
        },
        references,
      );
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
