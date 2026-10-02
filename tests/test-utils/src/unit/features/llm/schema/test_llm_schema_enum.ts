import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { IJsonSchemaCollection, ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
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
