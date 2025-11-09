import typia from "typia";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ArrayRepeatedRequired = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ArrayRepeatedRequired",
  })(typia.llm.schema<ArrayRepeatedRequired, "chatgpt">({}));