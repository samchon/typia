import typia from "typia";
import { ToJsonNull } from "../../../structures/ToJsonNull";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ToJsonNull = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ToJsonNull",
  })(typia.llm.schema<ToJsonNull, "chatgpt">());