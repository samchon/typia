import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagDefault } from "../../structures/TypeTagDefault";

export const test_llm_schema_TypeTagDefault = _test_llm_schema(
  "TypeTagDefault",
)(typia.llm.schema<TypeTagDefault>());
