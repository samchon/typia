import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagPattern } from "../../../structures/TypeTagPattern";

export const test_llm_schema_3_1_TypeTagPattern = _test_llm_schema({
  model: "3.1",
  name: "TypeTagPattern",
})(typia.llm.schema<TypeTagPattern, "3.1">());
