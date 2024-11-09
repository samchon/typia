import typia from "typia";
import { ArraySimple } from "../../../structures/ArraySimple";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ArraySimple = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ArraySimple",
  })(typia.llm.schema<ArraySimple, "chatgpt">());