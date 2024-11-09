import typia from "typia";
import { TypeTagRange } from "../../../structures/TypeTagRange";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_TypeTagRange = 
  _test_llm_schema({
    model: "chatgpt",
    name: "TypeTagRange",
  })(typia.llm.schema<TypeTagRange, "chatgpt">());