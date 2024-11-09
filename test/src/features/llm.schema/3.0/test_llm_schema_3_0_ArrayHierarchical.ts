import typia from "typia";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ArrayHierarchical = 
  _test_llm_schema({
    model: "3.0",
    name: "ArrayHierarchical",
  })(typia.llm.schema<ArrayHierarchical, "3.0">());