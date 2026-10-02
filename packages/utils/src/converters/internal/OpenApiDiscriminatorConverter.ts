import { OpenApi } from "@typia/interface";

/**
 * Copies discriminators between schema dialects without sharing their records.
 *
 * @evidence contracts/common.md#principled-implementation A discriminator is a property name and an optional mapping, and copying it into a new record keeps one dialect's schema from sharing a mutable mapping with another's.
 * @evidence contracts/common.md#clear-and-simple-design One namespace with the single copy function that every upgrader and downgrader shares.
 * @evidence contracts/common.md#prohibited-implementation-shortcuts No conversion of mapping values is done here.
 * @evidence contracts/common.md#meaningful-documentation The namespace comment states the purpose.
 */
export namespace OpenApiDiscriminatorConverter {
  /**
   * Copy a discriminator and its mapping.
   *
   * @param input Discriminator to copy
   *
   * @returns New discriminator whose mapping, when present, is a separate
   *   record
   *
   * @evidence contracts/common.md#principled-implementation The property name is copied and the mapping is shallow-copied only when it exists, so an absent mapping stays absent.
   * @evidence contracts/common.md#clear-and-simple-design One expression.
   * @evidence contracts/common.md#prohibited-implementation-shortcuts A plain copy with no special values.
   * @evidence contracts/common.md#meaningful-documentation The doc names the parameter and result.
   */
  export const clone = (
    input: OpenApi.IJsonSchema.IOneOf.IDiscriminator,
  ): OpenApi.IJsonSchema.IOneOf.IDiscriminator => ({
    propertyName: input.propertyName,
    ...(input.mapping !== undefined ? { mapping: { ...input.mapping } } : {}),
  });
}
