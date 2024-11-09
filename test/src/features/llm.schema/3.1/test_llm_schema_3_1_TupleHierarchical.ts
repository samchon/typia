import typia from "typia";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_1_TupleHierarchical = 
  _test_llm_schema({
    model: "3.1",
    name: "TupleHierarchical",
  })(typia.llm.schema<TupleHierarchical, "3.1">());