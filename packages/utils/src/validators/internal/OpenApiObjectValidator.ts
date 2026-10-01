import { OpenApi } from "@typia/interface";

import { NamingConvention } from "../../utils/NamingConvention";
import { ObjectDictionary } from "../../utils/internal/ObjectDictionary";
import { IOpenApiValidatorContext } from "./IOpenApiValidatorContext";
import { OpenApiStationValidator } from "./OpenApiStationValidator";

/**
 * Validates a value against an object schema.
 *
 * @evidence contracts/common.md#principled-implementation A value must be a plain object by its `Object` string tag, then each declared property is validated as required or optional by the `required` list, additional properties that have a schema are validated for keys not declared, and for a closed object `equals` reports every undeclared key that has a value. A key with value `undefined` has no JSON form, so it is neither required nor superfluous. Property access goes through own-key lookup, so inherited names are not read.
 * @evidence contracts/common.md#clear-and-simple-design One function that concatenates three groups of checks and a private equals checker; path building is the shared naming rule.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts Openness is read from the boolean keyword itself and not from its type, as the comment records, and no key is special-cased.
 * @evidence contracts/common.md#meaningful-documentation A namespace comment and function doc were added, and the comments on additional properties and `equals` explain the rules.
 */
export namespace OpenApiObjectValidator {
  /**
   * Validate that the value is a plain object and check each declared property,
   * each value of a schema-typed additional property and, for a closed object
   * when `equals` is set, that no undeclared key has a value.
   *
   * @param ctx Validation context
   *
   * @returns Whether the value satisfies the schema
   *
   * @evidence contracts/common.md#principled-implementation Non-objects, arrays and values whose string tag is not `Object` are reported with the object expected name; the checks of the three groups are all evaluated so every problem is reported.
   * @evidence contracts/common.md#clear-and-simple-design One function with the property, additional property and equals groups.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts The string tag test rejects values such as dates and maps and accepts a class instance with the ordinary tag, which fits the JSON data model.
   * @evidence contracts/common.md#meaningful-documentation A doc was added.
   */
  export const validate = (
    ctx: IOpenApiValidatorContext<OpenApi.IJsonSchema.IObject>,
  ): boolean => {
    if (
      typeof ctx.value !== "object" ||
      ctx.value === null ||
      Array.isArray(ctx.value) ||
      isJsonObject(ctx.value) === false
    )
      return ctx.report(ctx);
    return [
      ...Object.entries(ctx.schema.properties ?? {}).map(([key, value]) =>
        OpenApiStationValidator.validate({
          ...ctx,
          schema: value,
          value: ObjectDictionary.get(ctx.value as Record<string, any>, key),
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
        ? // A key whose value is `undefined` has no JSON form, so it is not an
          // additional property to constrain. Validating it as a required value
          // would reject what `typia.is` and `typia.equals` both accept on an
          // index-signature type.
          Object.entries(ctx.value)
            .filter(
              ([key, value]) =>
                value !== undefined &&
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
      // Whether a stray property is superfluous is asked only of a closed
      // object. An `additionalProperties` that opens the object — `true` for
      // any value, or a schema constraining it — declares that undeclared keys
      // are legitimate members, so they are never superfluous and `equals` has
      // nothing to decide. `typia.equals` agrees: it accepts an extra key on a
      // type carrying an index signature and rejects one on a type without.
      //
      // The previous `typeof !== "object"` test read only whether the keyword
      // was a schema, so it excluded `{ ... }` but not `true`, and closed an
      // object that had explicitly declared itself open. Reading the boolean is
      // what lets one document mix an open and a closed object under a single
      // `equals`, which no option value could otherwise satisfy.
      ...(ctx.equals === true && !ctx.schema.additionalProperties
        ? [validateEquals(ctx)]
        : []),
    ].every((v) => v);
  };

  const isJsonObject = (value: object): boolean => {
    try {
      return Object.prototype.toString.call(value) === "[object Object]";
    } catch {
      return false;
    }
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
        // A key whose value is `undefined` has no JSON form — `JSON.stringify`
        // erases it — so the value does not carry it as a property and it
        // cannot be superfluous. `typia.equals` agrees, and typia's own emitter
        // erases `undefined` and `never` members from the schema while the
        // generated value still spells the keys out.
        if (value === undefined) return true;
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
