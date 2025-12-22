import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayMatrix } from "../../structures/ArrayMatrix";

export const test_llm_schema_ArrayMatrix = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ArrayMatrix>($defs);
  _test_llm_schema({
    name: "ArrayMatrix",
    schema,
    $defs,
  });
};
