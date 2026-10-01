import { ILlmSchema } from "@typia/interface";
import { OpenApi } from "@typia/interface";
import { IJsonSchemaCollection } from "@typia/interface";
import { TestEquality } from "@typia/oracle/equality";
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
 *
 * @evidence contracts/testing.md#behavioral-verification LlmSchemaConverter.parameters removes the hobby reference description; independent reference and definition subset checks also prevent an absent or wrongly bound hobby from passing that absence check.
 * @evidence contracts/testing.md#independent-expectations The authored IHobby reference and name:string target establish the exact local pointer and required target shape independently. The subset intentionally leaves unrelated descriptor formatting to description cases.
 * @evidence contracts/testing.md#distinguishing-cases The original strict property-description distinction is retained and paired with preserved reference/target meaning. Default-versus-strict placement is verified in strict_description.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this matching export through node:test with the plugin-free oracle/configuration. Inline OpenAPI or LLM fixtures establish portable input meaning independently; the original assertion names remain, and local private helpers are reviewed through this owning case. Native JSON/LLM emission and JSDoc extraction remain in their existing schema/spec batches.
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
