import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_llm_schema_ArrayRepeatedNullable = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ArrayRepeatedNullable>($defs);
  _test_llm_schema({
    name: "ArrayRepeatedNullable",
    schema,
    $defs,
  });
};
