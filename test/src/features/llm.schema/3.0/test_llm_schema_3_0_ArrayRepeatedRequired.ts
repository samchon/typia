import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_llm_schema_3_0_ArrayRepeatedRequired = _test_llm_schema({
  model: "3.0",
  name: "ArrayRepeatedRequired",
})(typia.llm.schema<ArrayRepeatedRequired, "3.0">());
