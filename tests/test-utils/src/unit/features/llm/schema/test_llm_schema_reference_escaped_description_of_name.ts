import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { IJsonSchemaCollection, ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
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
