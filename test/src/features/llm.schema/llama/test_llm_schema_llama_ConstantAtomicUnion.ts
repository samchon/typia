import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_llm_schema_llama_ConstantAtomicUnion = _test_llm_schema({
  model: "llama",
  name: "ConstantAtomicUnion",
})(typia.llm.schema<ConstantAtomicUnion, "llama">({}));
