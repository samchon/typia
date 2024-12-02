import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";

export const test_llm_schema_3_0_ToJsonAtomicUnion = _test_llm_schema({
  model: "3.0",
  name: "ToJsonAtomicUnion",
})(typia.llm.schema<ToJsonAtomicUnion, "3.0">());
