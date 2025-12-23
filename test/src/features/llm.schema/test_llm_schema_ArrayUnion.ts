import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_llm_schema_ArrayUnion = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ArrayUnion>($defs);
  _test_llm_schema({
    name: "ArrayUnion",
    schema,
    $defs,
  });
};
