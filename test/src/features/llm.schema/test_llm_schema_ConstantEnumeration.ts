import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ConstantEnumeration } from "../../structures/ConstantEnumeration";

export const test_llm_schema_ConstantEnumeration = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ConstantEnumeration>($defs);
  _test_llm_schema({
    name: "ConstantEnumeration",
    schema,
    $defs,
  });
};
