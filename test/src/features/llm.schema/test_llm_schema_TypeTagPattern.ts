import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_llm_schema_TypeTagPattern = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<TypeTagPattern>($defs);
  _test_llm_schema({
    name: "TypeTagPattern",
    schema,
    $defs,
  });
};
