import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TupleHierarchical } from "../../structures/TupleHierarchical";

export const test_llm_schema_TupleHierarchical = _test_llm_schema(
  "TupleHierarchical",
)(typia.llm.schema<TupleHierarchical>());
