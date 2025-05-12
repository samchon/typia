import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicTree } from "../../../structures/DynamicTree";

export const test_llm_schema_3_0_DynamicTree = _test_llm_schema({
  model: "3.0",
  name: "DynamicTree",
})(typia.llm.schema<DynamicTree, "3.0">());
