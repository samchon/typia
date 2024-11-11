import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_llm_schema_3_0_TypeTagPattern = _test_llm_schema({
  model: "3.0",
  name: "TypeTagPattern",
})(typia.llm.schema<TypeTagPattern, "3.0">());
