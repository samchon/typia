import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ToJsonNull } from "../../structures/ToJsonNull";

export const test_llm_schema_ToJsonNull = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ToJsonNull>($defs);
  _test_llm_schema({
    name: "ToJsonNull",
    schema,
    $defs,
  });
};
