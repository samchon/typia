import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagAtomicUnion } from "../../structures/TypeTagAtomicUnion";

export const test_llm_schema_TypeTagAtomicUnion = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<TypeTagAtomicUnion>($defs);
  _test_llm_schema({
    name: "TypeTagAtomicUnion",
    schema,
    $defs,
  });
};
