import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_llm_schema_chatgpt_ArrayUnion = _test_llm_schema({
  model: "chatgpt",
  name: "ArrayUnion",
})(typia.llm.schema<ArrayUnion, "chatgpt">({}));
