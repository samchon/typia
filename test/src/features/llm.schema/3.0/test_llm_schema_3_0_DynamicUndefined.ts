import typia from "typia";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_DynamicUndefined = 
  _test_llm_schema({
    model: "3.0",
    name: "DynamicUndefined",
  })(typia.llm.schema<DynamicUndefined, "3.0">());