import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRecursive } from "../../../structures/ArrayRecursive";

export const test_llm_schema_3_1_ArrayRecursive = _test_llm_schema({
  model: "3.1",
  name: "ArrayRecursive",
})(typia.llm.schema<ArrayRecursive, "3.1">());
