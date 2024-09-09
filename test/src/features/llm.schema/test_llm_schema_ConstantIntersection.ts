import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ConstantIntersection } from "../../structures/ConstantIntersection";

export const test_llm_schema_ConstantIntersection = _test_llm_schema(
  "ConstantIntersection",
)(typia.llm.schema<ConstantIntersection>());
