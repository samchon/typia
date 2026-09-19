import { ILlmSchema } from "@typia/interface";
import { TestEquality } from "@typia/template/equality";
import typia, { tags } from "typia";

export const test_llm_schema_spec_record = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema =
    typia.llm.schema<Record<string, string & tags.MinLength<1>>>($defs);
  const key = Object.keys($defs)[0]!;

  TestEquality.equals("record top ref", clean(schema), {
    $ref: `#/$defs/${key}`,
  });
  TestEquality.equals("record string value", clean($defs[key]), {
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
