import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_llm_schema_3_1_ArrayAny = _test_llm_schema({
  model: "3.1",
  name: "ArrayAny",
})(typia.llm.schema<ArrayAny, "3.1">({}));
