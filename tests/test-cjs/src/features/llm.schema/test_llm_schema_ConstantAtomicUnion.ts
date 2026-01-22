import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_llm_schema_ConstantAtomicUnion = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ConstantAtomicUnion>($defs);
  _test_llm_schema({
    name: "ConstantAtomicUnion",
    schema,
    $defs,
  });
};
