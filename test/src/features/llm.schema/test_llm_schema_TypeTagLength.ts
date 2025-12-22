import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_llm_schema_TypeTagLength = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<TypeTagLength>($defs);
  _test_llm_schema({
    name: "TypeTagLength",
    schema,
    $defs,
  });
};
