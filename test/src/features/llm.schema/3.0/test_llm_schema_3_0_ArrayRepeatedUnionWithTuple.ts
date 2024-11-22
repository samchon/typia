import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_llm_schema_3_0_ArrayRepeatedUnionWithTuple = _test_llm_schema(
  {
    model: "3.0",
    name: "ArrayRepeatedUnionWithTuple",
  },
)(typia.llm.schema<ArrayRepeatedUnionWithTuple, "3.0">());
