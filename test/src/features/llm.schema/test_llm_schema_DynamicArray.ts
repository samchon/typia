import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicArray } from "../../structures/DynamicArray";

export const test_llm_schema_DynamicArray = _test_llm_schema("DynamicArray")(
  typia.llm.schema<DynamicArray>(),
);
