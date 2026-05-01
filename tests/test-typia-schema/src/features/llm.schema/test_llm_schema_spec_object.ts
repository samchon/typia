import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia from "typia";

export const test_llm_schema_spec_object = (): void => {
  interface IObjectSpec {
    required: string;
    optional?: number;
    nullable: boolean | null;
  }

  const $defs: Record<string, ILlmSchema> = {};
  const schema = typia.llm.schema<IObjectSpec>($defs);
  TestValidator.equals("object top ref", clean(schema), {
    $ref: "#/$defs/IObjectSpec",
  });
  TestValidator.equals("object definition", clean($defs.IObjectSpec), {
    type: "object",
    properties: {
      nullable: {
        anyOf: [
          {
            type: "null",
          },
          {
            type: "boolean",
          },
        ],
      },
      optional: {
        type: "number",
      },
      required: {
        type: "string",
      },
    },
    required: ["required", "nullable"],
    additionalProperties: false,
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
