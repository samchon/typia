import { TestValidator } from "@nestia/e2e";
import {
  IJsonSchemaTransformError,
  ILlmSchema,
  IResult,
  OpenApi,
} from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies strict LLM descriptions retain independently expected numeric
 * defaults.
 *
 * Strict conversion moves numeric keywords into description tags. Zero,
 * negative, fractional and scientific defaults must survive that move with
 * deterministic spelling and placement.
 *
 * 1. Convert the authored numeric matrix and nested property, array, union and
 *    reference inputs.
 * 2. Compare exact description strings and assert removal of the original default
 *    field.
 *
 * @evidence contracts/testing.md#behavioral-verification LlmSchemaConverter.schema executes strict conversion directly and exact description/default-removal assertions distinguish missing defaults, wrong order or spelling and lost nested defaults.
 * @evidence contracts/testing.md#independent-expectations Each expected description is authored independently from the documented strict description-tag representation and literal numeric values; none is read from converter output. The optional reads explicitly expose a lost description as null in the failure report.
 * @evidence contracts/testing.md#distinguishing-cases Integer zero/negative and number fractional/scientific defaults, existing descriptions and other constraints, direct properties, array items, union branches and named references retain all original distinctions. Non-strict numeric retention is a separate converter concern, not certified here.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test under a plugin-free configuration and oracle. Its inputs are authored literals and direct utility calls; no native producer, installed artifact or product host is required. Private local assertion/reference helpers remain part of this case's review.
 */
export const test_llm_schema_strict_numeric_default = (): void => {
  const cases: Array<{
    name: string;
    schema: OpenApi.IJsonSchema.IInteger | OpenApi.IJsonSchema.INumber;
    description: string;
  }> = [
    {
      name: "zero integer",
      schema: {
        type: "integer",
        description: "Counter",
        minimum: 0,
        maximum: 10,
        default: 0,
      },
      description: "Counter\n\n\n@minimum 0\n@maximum 10\n@default 0",
    },
    {
      name: "negative integer",
      schema: { type: "integer", default: -7 },
      description: "@default -7",
    },
    {
      name: "fractional number",
      schema: { type: "number", multipleOf: 0.01, default: 0.25 },
      description: "@multipleOf 0.01\n@default 0.25",
    },
    {
      name: "scientific number",
      schema: { type: "number", default: 1e-7 },
      description: "@default 1e-7",
    },
  ];

  for (const entry of cases) {
    const result: IResult<ILlmSchema, IJsonSchemaTransformError> =
      LlmSchemaConverter.schema({
        config: { strict: true },
        components: {},
        $defs: {},
        schema: entry.schema,
      });
    TestValidator.predicate(`${entry.name} converted`, result.success);
    if (result.success === false) continue;
    TestEquality.equals(
      `${entry.name} description`,
      result.value.description,
      entry.description,
    );
    TestValidator.predicate(
      `${entry.name} default removed`,
      Object.hasOwn(result.value, "default") === false,
    );
  }

  const $defs: Record<string, ILlmSchema> = {};
  const nested: IResult<ILlmSchema, IJsonSchemaTransformError> =
    LlmSchemaConverter.schema({
      config: { strict: true },
      components: {
        schemas: {
          Referenced: { type: "number", default: -2.5 },
        },
      },
      $defs,
      schema: {
        type: "object",
        properties: {
          direct: { type: "integer", default: 0 },
          array: {
            type: "array",
            items: { type: "number", default: 0.125 },
          },
          union: {
            oneOf: [
              { type: "integer", default: -3 },
              { type: "number", default: 6e4 },
            ],
          },
          referenced: { $ref: "#/components/schemas/Referenced" },
        },
        required: ["direct", "array", "union", "referenced"],
      },
    });
  TestValidator.predicate("nested conversion", nested.success);
  if (nested.success === false) return;
  const object = nested.value as ILlmSchema.IObject;
  TestEquality.equals(
    "nested defaults",
    {
      // `?? null` on every optional read: the one-way `TestValidator.equals`
      // once compared a lost description as absent and passed (#2350).
      // `TestEquality` compares both key sets (#2401); the `null` keeps a
      // lost description explicit in the failure message.
      direct: object.properties.direct!.description ?? null,
      array:
        (object.properties.array as ILlmSchema.IArray).items.description ??
        null,
      union: (object.properties.union as ILlmSchema.IAnyOf).anyOf.map(
        (schema) => schema.description ?? null,
      ),
      reference: $defs.Referenced!.description ?? null,
    },
    {
      direct: "@default 0",
      array: "@default 0.125",
      union: ["@default -3", "@default 60000"],
      reference: "@default -2.5",
    },
  );
};
