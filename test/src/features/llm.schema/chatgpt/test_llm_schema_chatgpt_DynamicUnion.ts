import typia from "typia";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_DynamicUnion = 
  _test_llm_schema({
    model: "chatgpt",
    name: "DynamicUnion",
  })(typia.llm.schema<DynamicUnion, "chatgpt">());