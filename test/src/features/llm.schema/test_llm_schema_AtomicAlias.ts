import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { AtomicAlias } from "../../structures/AtomicAlias";

export const test_llm_schema_AtomicAlias = _test_llm_schema("AtomicAlias")(
  typia.llm.schema<AtomicAlias>(),
);
