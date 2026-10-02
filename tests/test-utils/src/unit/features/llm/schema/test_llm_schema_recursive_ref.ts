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
