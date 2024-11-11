import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_llm_schema_3_0_DynamicEnumeration = _test_llm_schema({
  model: "3.0",
  name: "DynamicEnumeration",
})(typia.llm.schema<DynamicEnumeration, "3.0">());
