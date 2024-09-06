import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { ArrayUnion } from "../../structures/ArrayUnion";

export const test_llm_schema_ArrayUnion = _test_llm_schema("ArrayUnion")(
  typia.llm.schema<ArrayUnion>(),
);
