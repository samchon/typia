import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";

export const test_llm_schema_3_0_TupleHierarchical = _test_llm_schema({
  model: "3.0",
  name: "TupleHierarchical",
})(typia.llm.schema<TupleHierarchical, "3.0">());
