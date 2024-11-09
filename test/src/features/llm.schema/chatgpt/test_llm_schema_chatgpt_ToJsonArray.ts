import typia from "typia";
import { ToJsonArray } from "../../../structures/ToJsonArray";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ToJsonArray = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ToJsonArray",
  })(typia.llm.schema<ToJsonArray, "chatgpt">());