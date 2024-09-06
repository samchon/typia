import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayHierarchicalPointer } from "../../structures/ArrayHierarchicalPointer";

export const test_llm_schema_ArrayHierarchicalPointer = _test_llm_schema(
  "ArrayHierarchicalPointer",
)(typia.llm.schema<ArrayHierarchicalPointer>());
