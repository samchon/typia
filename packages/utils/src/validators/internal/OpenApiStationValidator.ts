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

/**
 * Dispatches a value to the validator of the schema's kind.
 *
 * It settles the cases that need no kind-specific rule: an unknown schema,
 * `undefined`, null and references, which are resolved with cycle detection.
 *
 * @evidence contracts/common.md#principled-implementation The dispatcher settles the cases that need no kind rule (unknown accepts anything, `undefined` is accepted only when not required, null accepts null) and resolves a chain of references with a visited set, reporting malformed, circular and missing references, before calling the validator of the schema's kind. The expected name is computed once and passed down so messages agree.
 * @evidence contracts/common.md#clear-and-simple-design One function that tests the schema kind in a fixed order and delegates; the kinds do not know about each other except through this dispatch.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Reference resolution is the generic rule with cycle detection, and nothing is keyed on component names.
 * @evidence contracts/common.md#meaningful-documentation A namespace comment and function doc were added that state the dispatch and the reference handling.
 */
export namespace OpenApiStationValidator {
  /**
   * Validate a value against a schema of any kind.
   *
   * @param ctx Validation context without the expected type name
   * @param expected Type name to report, derived from the schema when omitted
   * @param references Reference keys already followed, for cycle detection
   *
   * @returns Whether the value satisfies the schema
   *
   * @evidence contracts/common.md#principled-implementation After the shared cases, references are followed to a terminal schema with a visited set that includes the keys already followed by an enclosing union, then the terminal schema is validated recursively; an unrecognized schema falls through to success, which is accepted because the emended union has no other member.
   * @evidence contracts/common.md#clear-and-simple-design A recursive function with an optional expected name and visited set as defaults.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The fall-through returns true only for schema shapes outside the emended union and is not a default for known kinds.
   * @evidence contracts/common.md#meaningful-documentation A doc was added with the parameters and result.
   */
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
