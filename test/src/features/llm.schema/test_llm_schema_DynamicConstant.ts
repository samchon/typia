import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicConstant } from "../../structures/DynamicConstant";

export const test_llm_schema_DynamicConstant = _test_llm_schema(
  "DynamicConstant",
)(typia.llm.schema<DynamicConstant>());
