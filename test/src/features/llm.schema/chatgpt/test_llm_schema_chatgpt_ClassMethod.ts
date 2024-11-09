import typia from "typia";
import { ClassMethod } from "../../../structures/ClassMethod";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ClassMethod = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ClassMethod",
  })(typia.llm.schema<ClassMethod, "chatgpt">());