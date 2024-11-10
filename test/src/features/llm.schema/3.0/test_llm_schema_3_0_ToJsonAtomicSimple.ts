import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonAtomicSimple } from "../../../structures/ToJsonAtomicSimple";

export const test_llm_schema_3_0_ToJsonAtomicSimple = _test_llm_schema({
  model: "3.0",
  name: "ToJsonAtomicSimple",
})(typia.llm.schema<ToJsonAtomicSimple, "3.0">());
