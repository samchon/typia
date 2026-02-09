import { TestValidator } from "@nestia/e2e";
import { ILlmSchema, IOpenApiSchemaError, IResult } from "@samchon/openapi";
import { LlmSchemaComposer } from "@samchon/openapi/src/composers/LlmSchemaComposer";

export const test_llm_schema_recursive_ref = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const result: IResult<ILlmSchema, IOpenApiSchemaError> =
    LlmSchemaComposer.schema({
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
