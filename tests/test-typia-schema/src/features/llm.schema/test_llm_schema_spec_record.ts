import { TestValidator } from "@nestia/e2e";
import { ILlmSchema } from "@typia/interface";
import typia, { tags } from "typia";

export const test_llm_schema_spec_record = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema =
    typia.llm.schema<Record<string, string & tags.MinLength<1>>>($defs);
  const key = Object.keys($defs)[0]!;

  TestValidator.equals("record top ref", clean(schema), {
    $ref: `#/$defs/${key}`,
  });
  TestValidator.equals("record string value", clean($defs[key]), {
    type: "object",
    properties: {},
    additionalProperties: {
      type: "string",
      minLength: 1,
    },
    required: [],
  });
};

const clean = <T>(value: T): T => JSON.parse(JSON.stringify(value));
