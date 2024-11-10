import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagTuple } from "../../../structures/TypeTagTuple";

export const test_llm_schema_chatgpt_TypeTagTuple = _test_llm_schema({
  model: "chatgpt",
  name: "TypeTagTuple",
})(typia.llm.schema<TypeTagTuple, "chatgpt">());
