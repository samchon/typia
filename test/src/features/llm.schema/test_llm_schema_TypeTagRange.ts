import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { TypeTagRange } from "../../structures/TypeTagRange";

export const test_llm_schema_TypeTagRange = _test_llm_schema("TypeTagRange")(
  typia.llm.schema<TypeTagRange>(),
);
