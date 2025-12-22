import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_llm_schema_ToJsonAtomicUnion = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ToJsonAtomicUnion>($defs);
  _test_llm_schema({
    name: "ToJsonAtomicUnion",
    schema,
    $defs,
  });
};
