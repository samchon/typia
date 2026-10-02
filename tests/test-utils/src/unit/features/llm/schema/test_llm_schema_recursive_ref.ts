import { IJsonSchemaTransformError, IResult } from "@typia/interface";
import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/oracle-equality";
import { LlmSchemaConverter } from "@typia/utils";

/**
 * Verifies recursive component references become recursive LLM definitions.
 *
 * A self-reference must terminate conversion while retaining the child array
 * and reference graph. Replacing recursive children with an empty or permissive
 * schema would lose meaning.
 *
 * 1. Convert the authored Department object whose child array refers back to
 *    Department.
 * 2. Compare success, the complete independently authored definition and the root
 *    reference.
 *
 * @evidence contracts/testing.md#behavioral-verification Direct LlmSchemaConverter.schema calls must populate the complete Department definition and return its local reference; literal graph comparison distinguishes missing fields and broken recursive reference spelling.
 * @evidence contracts/testing.md#independent-expectations The hand-written OpenAPI properties/required list and public component-to-definitions reference mapping establish the expected literal graph independently of converter output.
 * @evidence contracts/testing.md#distinguishing-cases The object, required scalar and recursive array member contribute distinct shape requirements; malformed and unresolved references are exercised by json_pointer_references and reserved_references.
 * @evidence contracts/testing.md#execution-ownership test-utils test:unit explicitly registers this exported case with node:test under a plugin-free configuration and oracle. Its inputs are authored literals and direct utility calls; no native producer, installed artifact or product host is required. Private local assertion/reference helpers remain part of this case's review.
 */
export const test_llm_schema_recursive_ref = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const result: IResult<ILlmSchema, IJsonSchemaTransformError> =
    LlmSchemaConverter.schema({
      $defs,
      components: {
        schemas: {
          Department: {
            type: "object",
            properties: {
              name: {
                type: "string",
              },
              children: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Department",
                },
              },
            },
            required: ["name", "children"],
          },
        },
      },
      schema: {
        $ref: "#/components/schemas/Department",
      },
    });
  TestEquality.equals("success", result.success, true);
  TestEquality.equals(
    "$defs",
    {
      Department: {
        type: "object",
        properties: {
          name: {
            type: "string",
          },
          children: {
            type: "array",
            items: {
              $ref: "#/$defs/Department",
            },
          },
        },
        required: ["name", "children"],
      },
    } satisfies Record<string, ILlmSchema> as Record<string, ILlmSchema>,
    $defs,
  );
  TestEquality.equals("schema", result.success ? result.value : {}, {
    $ref: "#/$defs/Department",
  });
};
