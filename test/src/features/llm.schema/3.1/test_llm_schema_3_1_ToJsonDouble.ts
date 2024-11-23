import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonDouble } from "../../../structures/ToJsonDouble";

export const test_llm_schema_3_1_ToJsonDouble = _test_llm_schema({
  model: "3.1",
  name: "ToJsonDouble",
})(typia.llm.schema<ToJsonDouble, "3.1">({}));
