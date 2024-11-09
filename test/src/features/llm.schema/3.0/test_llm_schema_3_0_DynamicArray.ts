import typia from "typia";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_DynamicArray = 
  _test_llm_schema({
    model: "3.0",
    name: "DynamicArray",
  })(typia.llm.schema<DynamicArray, "3.0">());