import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_llm_schema_3_1_DynamicNever = _test_llm_schema({
  model: "3.1",
  name: "DynamicNever",
})(typia.llm.schema<DynamicNever, "3.1">({}));
