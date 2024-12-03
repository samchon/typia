import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_llm_schema_claude_ConstantAtomicUnion = _test_llm_schema({
  model: "claude",
  name: "ConstantAtomicUnion",
})(typia.llm.schema<ConstantAtomicUnion, "claude">({}));
