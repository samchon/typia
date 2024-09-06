import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicUndefined } from "../../structures/DynamicUndefined";

export const test_llm_schema_DynamicUndefined = _test_llm_schema(
  "DynamicUndefined",
)(typia.llm.schema<DynamicUndefined>());
