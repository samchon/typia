import { OpenApi } from "@typia/interface";

export namespace OpenApiDiscriminatorConverter {
  export const clone = (
    input: OpenApi.IJsonSchema.IOneOf.IDiscriminator,
  ): OpenApi.IJsonSchema.IOneOf.IDiscriminator => ({
    propertyName: input.propertyName,
    ...(input.mapping !== undefined ? { mapping: { ...input.mapping } } : {}),
  });
}
