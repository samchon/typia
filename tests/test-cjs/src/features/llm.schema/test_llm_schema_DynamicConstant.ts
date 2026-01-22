import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_llm_schema_DynamicConstant = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<DynamicConstant>($defs);
  _test_llm_schema({
    name: "DynamicConstant",
    schema,
    $defs,
  });
};
