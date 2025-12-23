import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_llm_schema_ArrayHierarchical = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ArrayHierarchical>($defs);
  _test_llm_schema({
    name: "ArrayHierarchical",
    schema,
    $defs,
  });
};
