import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { AtomicIntersection } from "../../../structures/AtomicIntersection";

export const test_llm_schema_3_1_AtomicIntersection = _test_llm_schema({
  model: "3.1",
  name: "AtomicIntersection",
})(typia.llm.schema<AtomicIntersection, "3.1">());
