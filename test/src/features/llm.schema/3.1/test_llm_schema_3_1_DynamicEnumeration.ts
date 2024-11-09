import typia from "typia";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_DynamicEnumeration = 
  _test_llm_schema({
    model: "3.1",
    name: "DynamicEnumeration",
  })(typia.llm.schema<DynamicEnumeration, "3.1">());