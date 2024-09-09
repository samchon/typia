import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_llm_schema_ArrayAtomicAlias = _test_llm_schema(
  "ArrayAtomicAlias",
)(typia.llm.schema<ArrayAtomicAlias>());
