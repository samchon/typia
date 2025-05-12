import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicArray } from "../../../structures/DynamicArray";

export const test_llm_schema_chatgpt_DynamicArray = _test_llm_schema({
  model: "chatgpt",
  name: "DynamicArray",
})(typia.llm.schema<DynamicArray, "chatgpt">({}));
