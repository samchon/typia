import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayAtomicAlias } from "../../../structures/ArrayAtomicAlias";

export const test_llm_schema_3_1_ArrayAtomicAlias = _test_llm_schema({
  model: "3.1",
  name: "ArrayAtomicAlias",
})(typia.llm.schema<ArrayAtomicAlias, "3.1">());
