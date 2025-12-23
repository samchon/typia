import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_llm_schema_DynamicUnion = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<DynamicUnion>($defs);
  _test_llm_schema({
    name: "DynamicUnion",
    schema,
    $defs,
  });
};
