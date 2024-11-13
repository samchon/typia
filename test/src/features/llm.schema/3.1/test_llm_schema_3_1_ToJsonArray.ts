import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonArray } from "../../../structures/ToJsonArray";

export const test_llm_schema_3_1_ToJsonArray = _test_llm_schema({
  model: "3.1",
  name: "ToJsonArray",
})(typia.llm.schema<ToJsonArray, "3.1">());
