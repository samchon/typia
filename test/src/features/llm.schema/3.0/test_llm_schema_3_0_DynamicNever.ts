import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_llm_schema_3_0_DynamicNever = _test_llm_schema({
  model: "3.0",
  name: "DynamicNever",
})(typia.llm.schema<DynamicNever, "3.0">());
