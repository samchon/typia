import { ILlmSchema } from "@samchon/openapi";
import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_llm_schema_ConstantAtomicAbsorbed = (): void => {
  const $defs: Record<string, ILlmSchema> = {};
  const schema: ILlmSchema = typia.llm.schema<ConstantAtomicAbsorbed>($defs);
  _test_llm_schema({
    name: "ConstantAtomicAbsorbed",
    schema,
    $defs,
  });
};
