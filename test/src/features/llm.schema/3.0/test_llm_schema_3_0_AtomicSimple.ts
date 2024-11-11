import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_llm_schema_3_0_AtomicSimple = _test_llm_schema({
  model: "3.0",
  name: "AtomicSimple",
})(typia.llm.schema<AtomicSimple, "3.0">());
