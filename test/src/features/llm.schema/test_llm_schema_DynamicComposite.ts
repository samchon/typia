import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_llm_schema_DynamicComposite = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<DynamicComposite>($defs);
  _test_llm_schema({
    name: "DynamicComposite",
    schema,
    $defs,
  });
};
