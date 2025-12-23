import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagCustom } from "../../structures/TypeTagCustom";

export const test_llm_schema_TypeTagCustom = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<TypeTagCustom>($defs);
  _test_llm_schema({
    name: "TypeTagCustom",
    schema,
    $defs,
  });
};
