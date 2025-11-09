import typia from "typia";
import { ArrayRepeatedNullable } from "../../../structures/ArrayRepeatedNullable";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ArrayRepeatedNullable = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ArrayRepeatedNullable",
  })(typia.llm.schema<ArrayRepeatedNullable, "chatgpt">({}));