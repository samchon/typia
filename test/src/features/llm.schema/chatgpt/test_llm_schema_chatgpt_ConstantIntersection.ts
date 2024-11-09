import typia from "typia";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_ConstantIntersection = 
  _test_llm_schema({
    model: "chatgpt",
    name: "ConstantIntersection",
  })(typia.llm.schema<ConstantIntersection, "chatgpt">());