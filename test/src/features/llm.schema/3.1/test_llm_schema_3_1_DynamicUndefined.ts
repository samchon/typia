import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicUndefined } from "../../../structures/DynamicUndefined";

export const test_llm_schema_3_1_DynamicUndefined = _test_llm_schema({
  model: "3.1",
  name: "DynamicUndefined",
})(typia.llm.schema<DynamicUndefined, "3.1">());
