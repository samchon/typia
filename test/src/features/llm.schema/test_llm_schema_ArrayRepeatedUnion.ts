import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayRepeatedUnion } from "../../structures/ArrayRepeatedUnion";

export const test_llm_schema_ArrayRepeatedUnion = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ArrayRepeatedUnion>($defs);
  _test_llm_schema({
    name: "ArrayRepeatedUnion",
    schema,
    $defs,
  });
};
