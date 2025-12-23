import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_llm_schema_TypeTagDefault = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<TypeTagDefault>($defs);
  _test_llm_schema({
    name: "TypeTagDefault",
    schema,
    $defs,
  });
};
