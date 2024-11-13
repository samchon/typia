import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_llm_schema_3_1_TypeTagType = _test_llm_schema({
  model: "3.1",
  name: "TypeTagType",
})(typia.llm.schema<TypeTagType, "3.1">());
