import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagMatrix } from "../../structures/TypeTagMatrix";

export const test_llm_schema_TypeTagMatrix = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<TypeTagMatrix>($defs);
  _test_llm_schema({
    name: "TypeTagMatrix",
    schema,
    $defs,
  });
};
