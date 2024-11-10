import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_llm_schema_chatgpt_ArrayAtomicAlias = _test_llm_schema({
  model: "chatgpt",
  name: "ArrayAtomicAlias",
})(typia.llm.schema<ArrayAtomicAlias, "chatgpt">());
