import { TestValidator } from "@nestia/e2e";
import {
  IJsonSchemaTransformError,
  ILlmSchema,
  IResult,
  OpenApi,
} from "@typia/interface";
import { IJsonSchemaCollection } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies strict parameter conversion moves reference property prose to its
 * owner.
 *
 * Strict mode must move property-specific reference prose without substituting
 * the referenced type prose or leaving forbidden prose on the reference.
 *
 * 1. Convert an authored member whose hobby reference has property prose and whose
 *    target has distinct type prose.
 * 2. Retain the original owner-description and reference-description checks and
 *    contrast default mode.
 *
 */
export const test_llm_schema_strict_description = () => {
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
  const result: IResult<ILlmSchema.IParameters, IJsonSchemaTransformError> =
    LlmSchemaConverter.parameters({
      components: collection.components,
      schema: collection.schemas[0]! as OpenApi.IJsonSchema.IReference,
      config: {
        strict: true,
      },
    });
  TestValidator.predicate(
    "type description",
    result.success === true &&
      !!result.value.description?.includes("@link hobby") &&
      !!result.value.description?.includes("> A hobby") &&
      !!result.value.description?.includes("> The main hobby") &&
      !result.value.description?.includes("The hobby type"),
  );
  TestValidator.predicate(
    "$ref description",
    result.success === true &&
      result.value.properties.hobby!.description === undefined,
  );

  const ordinary = LlmSchemaConverter.parameters({
    components: collection.components,
    schema: collection.schemas[0]! as OpenApi.IJsonSchema.IReference,
    config: { strict: false },
  });
  TestEquality.equals("default parameters succeed", ordinary.success, true);
  if (ordinary.success)
    TestEquality.equals(
      "default reference description remains",
      ordinary.value.properties.hobby!.description,
      "A hobby.\n\nThe main hobby.",
    );
};
