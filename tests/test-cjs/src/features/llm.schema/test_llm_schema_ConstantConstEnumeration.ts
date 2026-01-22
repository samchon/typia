import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ConstantConstEnumeration } from "../../structures/ConstantConstEnumeration";

export const test_llm_schema_ConstantConstEnumeration = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ConstantConstEnumeration>($defs);
  _test_llm_schema({
    name: "ConstantConstEnumeration",
    schema,
    $defs,
  });
};
