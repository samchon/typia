import { ILlmSchema } from "@typia/interface";
import { OpenApi } from "@typia/interface";
import { IJsonSchemaCollection } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies strict references omit property descriptions while preserving their
 * targets.
 *
 * Removing a description must not erase or redirect the reference whose schema
 * meaning it describes.
 *
 * 1. Convert an authored member with an independently documented hobby reference
 *    in strict mode.
 * 2. Retain the original missing-description assertion and compare the exact
 *    reference and target fields.
 */
export const test_llm_schema_reference_escaped_description_of_property =
  (): void => {
    const collection: IJsonSchemaCollection = {
      version: "3.1",
      components: {
        schemas: {
          IMember: {
            type: "object",
            properties: {
              id: {
                type: "string",
                format: "uuid",
              },
              name: {
                type: "string",
              },
              age: {
                type: "integer",
                minimum: 20,
                exclusiveMaximum: 100,
              },
              hobby: {
                $ref: "#/components/schemas/IHobby",
                description: "A hobby.\n\nThe main hobby.",
              },
            },
            required: ["id", "name", "age", "hobby"],
          },
          IHobby: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
            },
            required: ["name"],
            description: "The hobby type.",
          },
        },
      },
      schemas: [
        {
          $ref: "#/components/schemas/IMember",
        },
      ],
    };
    const result = LlmSchemaConverter.parameters({
      components: collection.components,
      schema: collection.schemas[0]! as OpenApi.IJsonSchema.IReference,
      config: {
        strict: true,
      },
    });
    if (result.success === false)
      throw new Error("Failed to compose LLM schema.");

    TestEquality.equals(
      "property description",
      result.value.properties.hobby!.description,
      undefined,
    );

    TestEquality.equals(
      "hobby reference preserved",
      (result.value.properties.hobby as ILlmSchema.IReference).$ref,
      "#/$defs/IHobby",
    );
    TestEquality.subset<ILlmSchema>(
      "hobby target preserved",
      {
        type: "object",
        properties: { name: { type: "string" } },
        required: ["name"],
      },
      result.value.$defs.IHobby,
    );
  };
