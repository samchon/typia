import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayAtomicSimple } from "../../../structures/ArrayAtomicSimple";

export const test_llm_schema_3_1_ArrayAtomicSimple = _test_llm_schema({
  model: "3.1",
  name: "ArrayAtomicSimple",
})(typia.llm.schema<ArrayAtomicSimple, "3.1">());
