import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonNull } from "../../../structures/ToJsonNull";

export const test_llm_schema_3_0_ToJsonNull = _test_llm_schema({
  model: "3.0",
  name: "ToJsonNull",
})(typia.llm.schema<ToJsonNull, "3.0">());
