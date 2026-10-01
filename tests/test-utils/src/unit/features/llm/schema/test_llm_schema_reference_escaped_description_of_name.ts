import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { IJsonSchemaCollection, ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies qualified references retain their targets without namespace prose.
 *
 * References cannot depend on namespace descriptions being present; deeply
 * qualified names must preserve numeric target meaning on their own.
 *
 * 1. Convert the authored three-depth Something graph with all component
 *    descriptions absent.
 * 2. Retain reference presence and compare every exact pointer and numeric target
 *    field.
 *
 * @evidence contracts/testing.md#behavioral-verification LlmSchemaConverter.parameters retains the deep reference and exact deep/nested/something bindings and numeric z/y/x targets without namespace prose.
 * @evidence contracts/testing.md#independent-expectations Authored qualified component names and independent required numeric target subsets establish expected bindings; no expected pointer is read from converter output. Exact generated descriptor prose is not certified here.
 * @evidence contracts/testing.md#distinguishing-cases The same three qualification depths with descriptions absent distinguish name resolution from prose availability; the documented namespace sibling retains the corresponding prose-bearing input.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this matching export through node:test with the plugin-free oracle/configuration. Inline OpenAPI or LLM fixtures establish portable input meaning independently; local private helpers are reviewed through this owning case. Native JSON/LLM emission and JSDoc extraction remain in their existing schema/spec batches.
 */
export const test_llm_schema_reference_escaped_description_of_name =
  (): void => {
    const collection: IJsonSchemaCollection = {
      version: "3.1",
      components: {
        schemas: {
          Something: {
            type: "object",
            properties: {
              x: {
                type: "number",
              },
            },
            required: ["x"],
          },
          "Something.INested": {
            type: "object",
            properties: {
              y: {
                type: "number",
              },
            },
            required: ["y"],
          },
          "Something.INested.IDeep": {
            type: "object",
            properties: {
              z: {
                type: "number",
              },
            },
            required: ["z"],
          },
        },
      },
      schemas: [
        {
          type: "object",
          properties: {
            deep: {
              $ref: "#/components/schemas/Something.INested.IDeep",
            },
            nested: {
              $ref: "#/components/schemas/Something.INested",
            },
            something: {
              $ref: "#/components/schemas/Something",
            },
          },
          required: ["deep", "nested", "something"],
        },
      ],
    };
    const schema: ILlmSchema.IParameters = composeSchema(collection);
    const deep: ILlmSchema = schema.properties.deep as ILlmSchema;
    TestValidator.predicate(
      "$ref",
      () => !!(deep as ILlmSchema.IReference).$ref,
    );

    for (const [property, component, field] of [
      ["deep", "Something.INested.IDeep", "z"],
      ["nested", "Something.INested", "y"],
      ["something", "Something", "x"],
    ] as const) {
      TestEquality.equals(
        property + " reference",
        (schema.properties[property] as ILlmSchema.IReference).$ref,
        "#/$defs/" + component,
      );
      TestEquality.subset<ILlmSchema>(
        property + " target",
        {
          type: "object",
          properties: { [field]: { type: "number" } },
          required: [field],
        },
        schema.$defs[component],
      );
    }
  };

const composeSchema = (
  collection: IJsonSchemaCollection,
): ILlmSchema.IParameters => {
  const result: IResult<ILlmSchema.IParameters, IJsonSchemaTransformError> =
    LlmSchemaConverter.parameters({
      components: collection.components,
      schema: collection.schemas[0] as OpenApi.IJsonSchema.IObject,
    });
  if (result.success === false) throw new Error("Invalid schema");
  return result.value;
};
