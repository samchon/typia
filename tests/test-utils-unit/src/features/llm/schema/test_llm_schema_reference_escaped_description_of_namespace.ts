import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { IJsonSchemaCollection, ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies qualified references retain their targets with namespace prose.
 *
 * Namespace prose is metadata, so it must not turn the deeply qualified numeric
 * schema into a different reference or erase its definition.
 *
 * 1. Convert an authored graph with Something, Something.INested and
 *    Something.INested.IDeep and their original distinct prose.
 * 2. Retain reference presence and compare all three exact pointers and numeric
 *    target fields.
 *
 * @evidence contracts/testing.md#behavioral-verification LlmSchemaConverter.parameters must retain the original deep reference and exact bindings for deep/nested/something, with independently specified numeric z/y/x targets.
 * @evidence contracts/testing.md#independent-expectations Qualified component names, property-to-component bindings and x/y/z numeric fields are authored independently from the converter. The original predicate only checked reference presence; new pointer/definition assertions certify binding, while exact cascaded prose formatting remains outside this case.
 * @evidence contracts/testing.md#distinguishing-cases Three qualification depths and separately documented components preserve the original namespace/prose input distinction. The no-prose sibling and malformed-reference cases own adjacent distinctions.
 * @evidence contracts/testing.md#execution-ownership test-utils-unit start explicitly registers this matching export through node:test with the plugin-free oracle/configuration. Inline OpenAPI or LLM fixtures establish portable input meaning independently; the original assertion names remain, and local private helpers are reviewed through this owning case. Native JSON/LLM emission and JSDoc extraction remain in their existing schema/spec batches.
 */
export const test_llm_schema_reference_escaped_description_of_namespace =
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
            description: "Something interface.",
          },
          "Something.INested": {
            type: "object",
            properties: {
              y: {
                type: "number",
              },
            },
            required: ["y"],
            description: "Something nested interface.",
          },
          "Something.INested.IDeep": {
            type: "object",
            properties: {
              z: {
                type: "number",
              },
            },
            required: ["z"],
            description: "Something nested and deep interface.",
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
    TestValidator.predicate("$ref", () => {
      return !!(deep as ILlmSchema.IReference).$ref;
    });

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
