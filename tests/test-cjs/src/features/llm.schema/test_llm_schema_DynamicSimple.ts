import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_llm_schema_DynamicSimple = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<DynamicSimple>($defs);
  _test_llm_schema({
    name: "DynamicSimple",
    schema,
    $defs,
  });
};
