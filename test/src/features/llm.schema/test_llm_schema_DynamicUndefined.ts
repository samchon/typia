import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_llm_schema_DynamicUndefined = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<DynamicUndefined>($defs);
  _test_llm_schema({
    name: "DynamicUndefined",
    schema,
    $defs,
  });
};
