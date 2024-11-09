import typia from "typia";
import { ConstantIntersection } from "../../../structures/ConstantIntersection";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_ConstantIntersection = 
  _test_llm_schema({
    model: "3.1",
    name: "ConstantIntersection",
  })(typia.llm.schema<ConstantIntersection, "3.1">());