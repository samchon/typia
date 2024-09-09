import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayHierarchical } from "../../structures/ArrayHierarchical";

export const test_llm_schema_ArrayHierarchical = _test_llm_schema(
  "ArrayHierarchical",
)(typia.llm.schema<ArrayHierarchical>());
