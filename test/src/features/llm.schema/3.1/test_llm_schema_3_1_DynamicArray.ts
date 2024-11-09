import typia from "typia";
import { DynamicArray } from "../../../structures/DynamicArray";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_DynamicArray = 
  _test_llm_schema({
    model: "3.1",
    name: "DynamicArray",
  })(typia.llm.schema<DynamicArray, "3.1">());