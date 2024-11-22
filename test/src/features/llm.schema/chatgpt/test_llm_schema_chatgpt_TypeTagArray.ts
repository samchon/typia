import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagArray } from "../../../structures/TypeTagArray";

export const test_llm_schema_chatgpt_TypeTagArray = _test_llm_schema({
  model: "chatgpt",
  name: "TypeTagArray",
})(typia.llm.schema<TypeTagArray, "chatgpt">({}));
