import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ToJsonDouble } from "../../structures/ToJsonDouble";

export const test_llm_schema_ToJsonDouble = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ToJsonDouble>($defs);
  _test_llm_schema({
    name: "ToJsonDouble",
    schema,
    $defs,
  });
};
