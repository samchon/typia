import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonTuple } from "../../../structures/ToJsonTuple";

export const test_llm_schema_3_0_ToJsonTuple = _test_llm_schema({
  model: "3.0",
  name: "ToJsonTuple",
})(typia.llm.schema<ToJsonTuple, "3.0">());
