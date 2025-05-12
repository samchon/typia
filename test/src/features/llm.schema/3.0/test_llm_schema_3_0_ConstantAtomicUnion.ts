import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_llm_schema_3_0_ConstantAtomicUnion = _test_llm_schema({
  model: "3.0",
  name: "ConstantAtomicUnion",
})(typia.llm.schema<ConstantAtomicUnion, "3.0">());
