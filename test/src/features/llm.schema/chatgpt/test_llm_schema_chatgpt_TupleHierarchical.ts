import typia from "typia";
import { TupleHierarchical } from "../../../structures/TupleHierarchical";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_chatgpt_TupleHierarchical = 
  _test_llm_schema({
    model: "chatgpt",
    name: "TupleHierarchical",
  })(typia.llm.schema<TupleHierarchical, "chatgpt">());