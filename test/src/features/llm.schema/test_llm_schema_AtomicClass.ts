import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_llm_schema_AtomicClass = _test_llm_schema("AtomicClass")(
  typia.llm.schema<AtomicClass>(),
);
