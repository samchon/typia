import { OpenApi } from "@typia/interface";

/**
 * Removes the redundant half of an inclusive and an exclusive numeric bound.
 *
 * @evidence contracts/common.md#principled-implementation The emended form allows one lower and one upper numeric bound, so a schema with both an inclusive and an exclusive bound keeps the stricter one: the larger lower bound and the smaller upper bound, preferring the exclusive form on a tie.
 * @evidence contracts/common.md#clear-and-simple-design One function applied by upgraders and by the constraint shifter.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts The choice follows the mathematical meaning of the bounds, not any particular schema.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment states the rule.
 */
export namespace OpenApiExclusiveEmender {
  /**
   * Keep only the stricter of a numeric `minimum` and `exclusiveMinimum`, and
   * of `maximum` and `exclusiveMaximum`, as the emended form allows one of
   * each.
   *
   * When both values are equal the exclusive bound is kept, since it is the
   * stricter one. The input is not modified.
   *
   * @param schema Schema holding the bounds
   *
   * @returns Copy with at most one lower and one upper bound
   *
   * @evidence contracts/common.md#principled-implementation For each side the two values are compared and the weaker or equal-inclusive one is set to undefined, so the result has at most one lower and one upper bound; non-numeric values, such as a boolean 3.0 flag, leave the pair untouched.
   * @evidence contracts/common.md#clear-and-simple-design One function with a lower and an upper expression.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts It returns a copy and does not modify its input.
   * @evidence contracts/common.md#meaningful-documentation The doc states the tie rule and the copy.
   */
  export const emend = <
    Schema extends Pick<
      OpenApi.IJsonSchema.INumber,
      "exclusiveMinimum" | "exclusiveMaximum" | "minimum" | "maximum"
    >,
  >(
    schema: Schema,
  ): Schema => {
    const minimum =
      typeof schema.minimum === "number" &&
      typeof schema.exclusiveMinimum === "number"
        ? {
            minimum:
              schema.minimum > schema.exclusiveMinimum
                ? schema.minimum
                : undefined,
            exclusiveMinimum:
              schema.minimum > schema.exclusiveMinimum
                ? undefined
                : schema.exclusiveMinimum,
          }
        : {};
    const maximum =
      typeof schema.maximum === "number" &&
      typeof schema.exclusiveMaximum === "number"
        ? {
            maximum:
              schema.maximum < schema.exclusiveMaximum
                ? schema.maximum
                : undefined,
            exclusiveMaximum:
              schema.maximum < schema.exclusiveMaximum
                ? undefined
                : schema.exclusiveMaximum,
          }
        : {};
    return {
      ...schema,
      ...minimum,
      ...maximum,
    };
  };
}
