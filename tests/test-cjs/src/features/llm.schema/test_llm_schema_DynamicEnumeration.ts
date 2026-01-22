import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicEnumeration } from "../../structures/DynamicEnumeration";

export const test_llm_schema_DynamicEnumeration = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<DynamicEnumeration>($defs);
  _test_llm_schema({
    name: "DynamicEnumeration",
    schema,
    $defs,
  });
};
