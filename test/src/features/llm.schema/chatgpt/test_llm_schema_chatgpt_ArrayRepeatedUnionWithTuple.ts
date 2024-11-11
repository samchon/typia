import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRepeatedUnionWithTuple } from "../../../structures/ArrayRepeatedUnionWithTuple";

export const test_llm_schema_chatgpt_ArrayRepeatedUnionWithTuple =
  _test_llm_schema({
    model: "chatgpt",
    name: "ArrayRepeatedUnionWithTuple",
  })(typia.llm.schema<ArrayRepeatedUnionWithTuple, "chatgpt">());
