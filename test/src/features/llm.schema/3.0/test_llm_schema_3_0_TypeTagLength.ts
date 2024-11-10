import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagLength } from "../../../structures/TypeTagLength";

export const test_llm_schema_3_0_TypeTagLength = _test_llm_schema({
  model: "3.0",
  name: "TypeTagLength",
})(typia.llm.schema<TypeTagLength, "3.0">());
