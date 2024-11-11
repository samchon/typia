import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { AtomicSimple } from "../../../structures/AtomicSimple";

export const test_llm_schema_3_1_AtomicSimple = _test_llm_schema({
  model: "3.1",
  name: "AtomicSimple",
})(typia.llm.schema<AtomicSimple, "3.1">());
