import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_llm_schema_chatgpt_TypeTagMatrix = _test_llm_schema({
  model: "chatgpt",
  name: "TypeTagMatrix",
})(typia.llm.schema<TypeTagMatrix, "chatgpt">({}));
