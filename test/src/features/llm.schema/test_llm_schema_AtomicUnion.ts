import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_llm_schema_AtomicUnion = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<AtomicUnion>($defs);
  _test_llm_schema({
    name: "AtomicUnion",
    schema,
    $defs,
  });
};
