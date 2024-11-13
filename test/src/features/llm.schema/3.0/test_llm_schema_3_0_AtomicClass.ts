import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { AtomicClass } from "../../../structures/AtomicClass";

export const test_llm_schema_3_0_AtomicClass = _test_llm_schema({
  model: "3.0",
  name: "AtomicClass",
})(typia.llm.schema<AtomicClass, "3.0">());
