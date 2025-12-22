import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_llm_schema_DynamicArray = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<DynamicArray>($defs);
  _test_llm_schema({
    name: "DynamicArray",
    schema,
    $defs,
  });
};
