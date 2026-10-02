import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, OpenApi } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmSchemaConverter, OpenApiTypeChecker } from "@typia/utils";

/**
 * Verifies inversion translates discriminator references without losing
 * variants.
 *
 * Prefix-only checks permit an empty or misbound mapping. Exact independently
 * authored references distinguish both failures; native raw-union generation
 * remains in the existing schema specification boundary batch.
 *
 * 1. Invert a two-variant LLM schema and compare its references, discriminator and
 *    complete component field constraints.
 * 2. Remove only discriminator metadata and require the same variants without an
 *    invented discriminator.
 */
export const test_llm_schema_discriminator = (): void => {
  const $defs: Record<string, ILlmSchema> = {
    ICat: {
      type: "object",
      properties: {
        type: { type: "string", enum: ["cat"] },
        name: { type: "string" },
        ribbon: { type: "boolean" },
      },
      required: ["type", "name", "ribbon"],
      additionalProperties: false,
    },
    IAnt: {
      type: "object",
      properties: {
        type: { type: "string", enum: ["ant"] },
        name: { type: "string" },
        role: { type: "string", enum: ["queen", "soldier", "worker"] },
      },
      required: ["type", "name", "role"],
      additionalProperties: false,
    },
  };
  const schema: ILlmSchema.IAnyOf = {
    anyOf: [{ $ref: "#/$defs/ICat" }, { $ref: "#/$defs/IAnt" }],
    "x-discriminator": {
      propertyName: "type",
      mapping: { cat: "#/$defs/ICat", ant: "#/$defs/IAnt" },
    },
  };
  const components: OpenApi.IComponents = {};
  const invert: OpenApi.IJsonSchema = LlmSchemaConverter.invert({
    components,
    $defs,
    schema,
  });
  TestValidator.predicate(
    "invert",
    () =>
      OpenApiTypeChecker.isOneOf(invert) &&
      invert.discriminator !== undefined &&
      invert.discriminator.mapping !== undefined &&
      Object.values(invert.discriminator.mapping).every((k) =>
        k.startsWith("#/components/schemas/"),
      ),
  );
  TestEquality.equals<unknown>(
    "exact discriminator and variants",
    {
      oneOf: [
        { $ref: "#/components/schemas/ICat" },
        { $ref: "#/components/schemas/IAnt" },
      ],
      discriminator: {
        propertyName: "type",
        mapping: {
          cat: "#/components/schemas/ICat",
          ant: "#/components/schemas/IAnt",
        },
      },
    },
    OpenApiTypeChecker.isOneOf(invert)
      ? { oneOf: invert.oneOf, discriminator: invert.discriminator }
      : invert,
  );
  TestEquality.equals<OpenApi.IComponents>(
    "complete variant fields",
    {
      schemas: {
        ICat: {
          type: "object",
          properties: {
            type: { const: "cat" },
            name: { type: "string" },
            ribbon: { type: "boolean" },
          },
          required: ["type", "name", "ribbon"],
          additionalProperties: false,
        },
        IAnt: {
          type: "object",
          properties: {
            type: { const: "ant" },
            name: { type: "string" },
            role: {
              oneOf: [
                { const: "queen" },
                { const: "soldier" },
                { const: "worker" },
              ],
            },
          },
          required: ["type", "name", "role"],
          additionalProperties: false,
        },
      },
    },
    components,
  );
  const plain = LlmSchemaConverter.invert({
    components: {},
    $defs,
    schema: { anyOf: [{ $ref: "#/$defs/ICat" }, { $ref: "#/$defs/IAnt" }] },
  });
  TestEquality.equals<OpenApi.IJsonSchema>(
    "plain union variants",
    {
      oneOf: [
        { $ref: "#/components/schemas/ICat" },
        { $ref: "#/components/schemas/IAnt" },
      ],
    },
    plain,
  );
  TestEquality.equals(
    "plain union has no discriminator",
    OpenApiTypeChecker.isOneOf(plain)
      ? plain.discriminator
      : "wrong schema kind",
    undefined,
  );
};
