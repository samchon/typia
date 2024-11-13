import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_llm_schema_3_1_AtomicUnion = _test_llm_schema({
  model: "3.1",
  name: "AtomicUnion",
})(typia.llm.schema<AtomicUnion, "3.1">());
