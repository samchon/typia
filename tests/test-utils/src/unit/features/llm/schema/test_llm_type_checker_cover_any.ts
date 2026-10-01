import { OpenApi } from "@typia/interface";
import { IJsonSchemaCollection, ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmSchemaConverter, LlmTypeChecker } from "@typia/utils";

/**
 * Verifies unconstrained coverage includes nullable and optional strings but
 * not conversely.
 *
 * The unconstrained schema admits every value; narrower strings must not cover
 * that unconstrained population. Optionality is represented by the required
 * list, not a fabricated undefined JSON kind.
 *
 * 1. Convert an authored object with unconstrained, nullable-string and
 *    optional-string members.
 * 2. Retain both original any coverage checks and assert both reverse negative
 *    directions.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmSchemaConverter.parameters feeds LlmTypeChecker.covers; the unconstrained member covers nullable/optional strings, and both reverse comparisons must fail.
 * @evidence contracts/testing.md#independent-expectations An empty OpenAPI schema means unconstrained values, the null/string union means those two kinds, and the required list controls optionality. Separate boolean expectations follow those public meanings.
 * @evidence contracts/testing.md#distinguishing-cases The nullable and optional members each have a positive, with their one-axis reverse negatives. Actual native any/union/required generation remains in the schema matrix.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this matching export through node:test with the plugin-free oracle/configuration. The inline OpenAPI input is authored from declared fields rather than generated at execution. Private local helpers remain reviewed through this owning case.
 */
export const test_llm_type_checker_cover_any = () => {
  const collection: IJsonSchemaCollection = {
    version: "3.1",
    components: {
      schemas: {
        IBasic: {
          type: "object",
          properties: {
            any: {},
            string_or_null: {
              oneOf: [
                {
                  type: "null",
                },
                {
                  type: "string",
                },
              ],
            },
            string_or_undefined: {
              type: "string",
            },
          },
          required: ["any", "string_or_null"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/IBasic",
      },
    ],
  };
  const result = LlmSchemaConverter.parameters({
    components: collection.components,
    schema: collection.schemas[0] as OpenApi.IJsonSchema.IReference,
  });
  if (result.success === false)
    throw new Error(`Failed to compose parameters.`);

  const parameters = result.value;
  const check = (x: ILlmSchema, y: ILlmSchema): boolean =>
    LlmTypeChecker.covers({
      x,
      y,
      $defs: parameters.$defs,
    });
  TestEquality.equals(
    "any covers (string | null)",
    true,
    check(parameters.properties.any!, parameters.properties.string_or_null!),
  );
  TestEquality.equals(
    "any covers (string | undefined)",
    true,
    check(
      parameters.properties.any!,
      parameters.properties.string_or_undefined!,
    ),
  );

  TestEquality.equals(
    "nullable string cannot cover any",
    check(parameters.properties.string_or_null!, parameters.properties.any!),
    false,
  );
  TestEquality.equals(
    "optional string cannot cover any",
    check(
      parameters.properties.string_or_undefined!,
      parameters.properties.any!,
    ),
    false,
  );
};
