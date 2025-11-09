import typia from "typia";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_TypeTagPattern = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "TypeTagPattern",
  })(typia.llm.schema<TypeTagPattern, "chatgpt">({}));