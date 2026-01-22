import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagArray } from "../../structures/TypeTagArray";

export const test_llm_schema_TypeTagArray = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<TypeTagArray>($defs);
  _test_llm_schema({
    name: "TypeTagArray",
    schema,
    $defs,
  });
};
