import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_llm_schema_chatgpt_ArrayAtomicSimple = _test_llm_schema({
  model: "chatgpt",
  name: "ArrayAtomicSimple",
})(typia.llm.schema<ArrayAtomicSimple, "chatgpt">());
