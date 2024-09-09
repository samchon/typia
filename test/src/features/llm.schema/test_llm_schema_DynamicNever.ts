import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicNever } from "../../structures/DynamicNever";

export const test_llm_schema_DynamicNever = _test_llm_schema("DynamicNever")(
  typia.llm.schema<DynamicNever>(),
);
