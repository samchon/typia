import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";

export const test_llm_schema_3_0_ArrayRepeatedUnion = _test_llm_schema({
  model: "3.0",
  name: "ArrayRepeatedUnion",
})(typia.llm.schema<ArrayRepeatedUnion, "3.0">());
