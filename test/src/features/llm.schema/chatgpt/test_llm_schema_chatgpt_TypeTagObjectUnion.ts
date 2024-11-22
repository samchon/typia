import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_llm_schema_chatgpt_TypeTagObjectUnion = _test_llm_schema({
  model: "chatgpt",
  name: "TypeTagObjectUnion",
})(typia.llm.schema<TypeTagObjectUnion, "chatgpt">({}));
