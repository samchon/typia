import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayHierarchical } from "../../../structures/ArrayHierarchical";

export const test_llm_schema_3_1_ArrayHierarchical = _test_llm_schema({
  model: "3.1",
  name: "ArrayHierarchical",
})(typia.llm.schema<ArrayHierarchical, "3.1">());
