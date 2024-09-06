import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_llm_schema_AtomicUnion = _test_llm_schema("AtomicUnion")(
  typia.llm.schema<AtomicUnion>(),
);
