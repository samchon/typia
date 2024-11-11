import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TupleRestArray } from "../../../structures/TupleRestArray";

export const test_llm_schema_chatgpt_TupleRestArray = _test_llm_schema({
  model: "chatgpt",
  name: "TupleRestArray",
})(typia.llm.schema<TupleRestArray, "chatgpt">());
