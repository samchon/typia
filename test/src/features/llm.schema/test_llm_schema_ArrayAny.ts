import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_llm_schema_ArrayAny = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ArrayAny>($defs);
  _test_llm_schema({
    name: "ArrayAny",
    schema,
    $defs,
  });
};
