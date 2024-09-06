import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagLength } from "../../structures/TypeTagLength";

export const test_llm_schema_TypeTagLength = _test_llm_schema("TypeTagLength")(
  typia.llm.schema<TypeTagLength>(),
);
