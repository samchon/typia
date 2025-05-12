import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_llm_schema_3_1_ArraySimple = _test_llm_schema({
  model: "3.1",
  name: "ArraySimple",
})(typia.llm.schema<ArraySimple, "3.1">({}));
