import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_llm_schema_3_1_ArrayUnion = _test_llm_schema({
  model: "3.1",
  name: "ArrayUnion",
})(typia.llm.schema<ArrayUnion, "3.1">());
