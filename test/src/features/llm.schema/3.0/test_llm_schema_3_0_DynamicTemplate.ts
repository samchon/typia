import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicTemplate } from "../../../structures/DynamicTemplate";

export const test_llm_schema_3_0_DynamicTemplate = _test_llm_schema({
  model: "3.0",
  name: "DynamicTemplate",
})(typia.llm.schema<DynamicTemplate, "3.0">());
