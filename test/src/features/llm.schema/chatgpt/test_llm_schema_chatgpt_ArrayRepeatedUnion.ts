import typia from "typia";
import { ArrayRepeatedUnion } from "../../../structures/ArrayRepeatedUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ArrayRepeatedUnion = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "ArrayRepeatedUnion",
  })(typia.llm.schema<ArrayRepeatedUnion, "chatgpt">({}));