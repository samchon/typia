import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayRecursive } from "../../structures/ArrayRecursive";

export const test_llm_schema_ArrayRecursive = _test_llm_schema(
  "ArrayRecursive",
)(typia.llm.schema<ArrayRecursive>());
