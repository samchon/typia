import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_llm_schema_3_1_TypeTagRange = _test_llm_schema({
  model: "3.1",
  name: "TypeTagRange",
})(typia.llm.schema<TypeTagRange, "3.1">());
