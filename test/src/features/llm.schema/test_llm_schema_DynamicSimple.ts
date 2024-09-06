import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicSimple } from "../../structures/DynamicSimple";

export const test_llm_schema_DynamicSimple = _test_llm_schema("DynamicSimple")(
  typia.llm.schema<DynamicSimple>(),
);
