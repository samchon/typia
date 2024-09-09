import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagPattern } from "../../structures/TypeTagPattern";

export const test_llm_schema_TypeTagPattern = _test_llm_schema(
  "TypeTagPattern",
)(typia.llm.schema<TypeTagPattern>());
