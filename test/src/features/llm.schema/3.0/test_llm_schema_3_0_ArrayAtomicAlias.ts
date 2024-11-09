import typia from "typia";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_3_0_ArrayAtomicAlias = 
  _test_llm_schema({
    model: "3.0",
    name: "ArrayAtomicAlias",
  })(typia.llm.schema<ArrayAtomicAlias, "3.0">());