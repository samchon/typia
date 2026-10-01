import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { IJsonSchemaCollection, ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies enum parameter conversion preserves every authored string
 * alternative.
 *
 * The converter must preserve literal values rather than selecting one branch
 * or broadening them to an unconstrained string.
 *
 * 1. Convert an authored article object with three literal format alternatives.
 * 2. Compare the complete format enum and contrast an unconstrained string
 *    property.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmSchemaConverter.parameters must succeed and retain html/md/txt in the asserted order; an adjacent string-only input must remain unconstrained.
 * @evidence contracts/testing.md#independent-expectations The original TypeScript literal union and the authored OpenAPI const values independently define the expected enum; the expectation is an existing separate literal, never converter output.
 * @evidence contracts/testing.md#distinguishing-cases Three distinct literal alternatives and the string-only negative twin distinguish enum aggregation from broadening. Native literal-union generation remains in the schema matrix.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this matching export through node:test with the plugin-free oracle/configuration. The inline OpenAPI input is authored from declared fields rather than generated at execution. Private local helpers remain reviewed through this owning case.
 */
export const test_llm_schema_enum = (): void => {
  const collection: IJsonSchemaCollection = {
    version: "3.1",
    components: {
      schemas: {
        IBbsArticle: {
          type: "object",
          properties: {
            format: {
              oneOf: [
                {
                  const: "html",
                },
                {
                  const: "md",
                },
                {
                  const: "txt",
                },
              ],
            },
          },
          required: ["format"],
        },
      },
    },
    schemas: [
      {
        $ref: "#/components/schemas/IBbsArticle",
      },
    ],
  };
  const result: IResult<ILlmSchema.IParameters, IJsonSchemaTransformError> =
    LlmSchemaConverter.parameters({
      components: collection.components,
      schema: collection.schemas[0] as
        | OpenApi.IJsonSchema.IObject
        | OpenApi.IJsonSchema.IReference,
    });
  TestEquality.equals("success", result.success, true);
  if (result.success === false) return;

  const formatted: ILlmSchema.IParameters = result.value;
  const formatProp = formatted.properties.format as ILlmSchema.IString;
  TestEquality.equals("enum", formatProp.enum, ["html", "md", "txt"]);

  const ordinary = LlmSchemaConverter.parameters({
    components: {},
    schema: {
      type: "object",
      properties: { format: { type: "string" } },
      required: ["format"],
    },
  });
  TestEquality.equals("ordinary string succeeds", ordinary.success, true);
  if (ordinary.success)
    TestEquality.equals(
      "ordinary string has no enum",
      (ordinary.value.properties.format as ILlmSchema.IString).enum,
      undefined,
    );
};
