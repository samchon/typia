import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_llm_schema_TypeTagRange = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<TypeTagRange>($defs);
  _test_llm_schema({
    name: "TypeTagRange",
    schema,
    $defs,
  });
};
