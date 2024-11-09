import typia from "typia";
import { DynamicUnion } from "../../../structures/DynamicUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_DynamicUnion = 
  _test_llm_schema({
    model: "3.0",
    name: "DynamicUnion",
  })(typia.llm.schema<DynamicUnion, "3.0">());