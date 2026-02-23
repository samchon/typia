import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaTransformError, IResult } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import { ILlmSchema } from "typia";

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
  TestValidator.equals("success", result.success, true);
  TestValidator.equals(
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
  TestValidator.equals("schema", result.success ? result.value : {}, {
    $ref: "#/$defs/Department",
  });
};
