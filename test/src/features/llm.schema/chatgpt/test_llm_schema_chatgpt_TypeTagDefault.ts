import typia from "typia";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_TypeTagDefault = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "TypeTagDefault",
  })(typia.llm.schema<TypeTagDefault, "chatgpt">({}));