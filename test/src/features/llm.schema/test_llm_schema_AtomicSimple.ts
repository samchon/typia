import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_llm_schema_AtomicSimple = _test_llm_schema("AtomicSimple")(
  typia.llm.schema<AtomicSimple>(),
);
