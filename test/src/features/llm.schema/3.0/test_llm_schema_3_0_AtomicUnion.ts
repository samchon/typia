import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_llm_schema_3_0_AtomicUnion = _test_llm_schema({
  model: "3.0",
  name: "AtomicUnion",
})(typia.llm.schema<AtomicUnion, "3.0">());
