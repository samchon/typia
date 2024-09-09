import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { AtomicIntersection } from "../../structures/AtomicIntersection";

export const test_llm_schema_AtomicIntersection = _test_llm_schema(
  "AtomicIntersection",
)(typia.llm.schema<AtomicIntersection>());
