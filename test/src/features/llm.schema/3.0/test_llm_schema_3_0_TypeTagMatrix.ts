import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_llm_schema_3_0_TypeTagMatrix = _test_llm_schema({
  model: "3.0",
  name: "TypeTagMatrix",
})(typia.llm.schema<TypeTagMatrix, "3.0">());
