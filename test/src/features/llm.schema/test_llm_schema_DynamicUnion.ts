import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicUnion } from "../../structures/DynamicUnion";

export const test_llm_schema_DynamicUnion = _test_llm_schema("DynamicUnion")(
  typia.llm.schema<DynamicUnion>(),
);
