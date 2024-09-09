import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayAny } from "../../structures/ArrayAny";

export const test_llm_schema_ArrayAny = _test_llm_schema("ArrayAny")(
  typia.llm.schema<ArrayAny>(),
);
