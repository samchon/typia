import { TestValidator } from "@nestia/e2e";
import { IJsonSchemaTransformError, IResult, OpenApi } from "@typia/interface";
import { LlmSchemaConverter } from "@typia/utils";
import { ILlmSchema } from "typia";

export const test_llm_schema_enum_reference = (): void => {
  const components: OpenApi.IComponents = {
    schemas: {
      named: {
        oneOf: [
          {
            const: 4,
          },
          {
            const: 5,
          },
        ],
      },
    },
  };
  const schema: OpenApi.IJsonSchema = {
    oneOf: [
      {
        const: 3,
      },
      {
        $ref: "#/components/schemas/named",
      },
    ],
  };

  const result: IResult<ILlmSchema, IJsonSchemaTransformError> =
    LlmSchemaConverter.schema({
      components,
      schema,
      $defs: {},
      config: {
        reference: false,
      },
    });
  TestValidator.equals(
    "success",
    result.success,
    true,
    (key) => key === "description",
  );
  TestValidator.equals(
    "union",
    result.success ? result.value : {},
    {
      type: "number",
      enum: [3, 4, 5],
    },
    (key) => key === "description",
  );
};
