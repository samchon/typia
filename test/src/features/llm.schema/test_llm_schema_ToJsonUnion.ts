import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ToJsonUnion } from "../../structures/ToJsonUnion";

export const test_llm_schema_ToJsonUnion = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ToJsonUnion>($defs);
  _test_llm_schema({
    name: "ToJsonUnion",
    schema,
    $defs,
  });
};
