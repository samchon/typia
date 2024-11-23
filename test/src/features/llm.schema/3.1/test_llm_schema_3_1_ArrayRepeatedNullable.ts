import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";

export const test_llm_schema_3_1_ArrayRepeatedNullable = _test_llm_schema({
  model: "3.1",
  name: "ArrayRepeatedNullable",
})(typia.llm.schema<ArrayRepeatedNullable, "3.1">({}));
