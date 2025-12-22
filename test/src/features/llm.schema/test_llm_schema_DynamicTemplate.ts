import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicTemplate } from "../../structures/DynamicTemplate";

export const test_llm_schema_DynamicTemplate = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<DynamicTemplate>($defs);
  _test_llm_schema({
    name: "DynamicTemplate",
    schema,
    $defs,
  });
};
