import typia from "typia";
import { ArrayMatrix } from "../../../structures/ArrayMatrix";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ArrayMatrix = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ArrayMatrix",
  })(typia.llm.schema<ArrayMatrix, "chatgpt">());