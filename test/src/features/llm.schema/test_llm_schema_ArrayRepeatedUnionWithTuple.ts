import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayRepeatedUnionWithTuple } from "../../structures/ArrayRepeatedUnionWithTuple";

export const test_llm_schema_ArrayRepeatedUnionWithTuple = _test_llm_schema(
  "ArrayRepeatedUnionWithTuple",
)(typia.llm.schema<ArrayRepeatedUnionWithTuple>());
