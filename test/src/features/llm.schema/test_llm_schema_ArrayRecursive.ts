import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_llm_schema_ArrayRecursive = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ArrayRecursive>($defs);
  _test_llm_schema({
    name: "ArrayRecursive",
    schema,
    $defs,
  });
};
