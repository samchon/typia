import typia from "typia";
import { TypeTagType } from "../../../structures/TypeTagType";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_TypeTagType = (): void =>
  _test_llm_schema({
    model: "chatgpt",
    name: "TypeTagType",
  })(typia.llm.schema<TypeTagType, "chatgpt">({}));