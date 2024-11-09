import typia from "typia";
import { ArrayAny } from "../../../structures/ArrayAny";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ArrayAny = 
  _test_llm_schema({
    model: "3.0",
    name: "ArrayAny",
  })(typia.llm.schema<ArrayAny, "3.0">());