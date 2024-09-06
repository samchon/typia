import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_llm_schema_ToJsonAtomicUnion = _test_llm_schema(
  "ToJsonAtomicUnion",
)(typia.llm.schema<ToJsonAtomicUnion>());
