import typia from "typia";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ToJsonUnion = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ToJsonUnion",
  })(typia.llm.schema<ToJsonUnion, "chatgpt">());