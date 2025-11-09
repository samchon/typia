import typia from "typia";
import { TypeTagLength } from "../../../structures/TypeTagLength";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_TypeTagLength = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "TypeTagLength",
  })(typia.llm.schema<TypeTagLength, "chatgpt">({}));