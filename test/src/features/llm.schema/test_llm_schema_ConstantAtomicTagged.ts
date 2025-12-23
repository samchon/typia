import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_llm_schema_ConstantAtomicTagged = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ConstantAtomicTagged>($defs);
  _test_llm_schema({
    name: "ConstantAtomicTagged",
    schema,
    $defs,
  });
};
