import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_llm_schema_DynamicNever = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<DynamicNever>($defs);
  _test_llm_schema({
    name: "DynamicNever",
    schema,
    $defs,
  });
};
