import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ToJsonUnion } from "../../../structures/ToJsonUnion";

export const test_llm_schema_3_1_ToJsonUnion = _test_llm_schema({
  model: "3.1",
  name: "ToJsonUnion",
})(typia.llm.schema<ToJsonUnion, "3.1">({}));
