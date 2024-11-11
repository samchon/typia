import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayRepeatedNullable } from "../../structures/ArrayRepeatedNullable";

export const test_llm_schema_ArrayRepeatedNullable = _test_llm_schema(
  "ArrayRepeatedNullable",
)(typia.llm.schema<ArrayRepeatedNullable>());
