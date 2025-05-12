import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicComposite } from "../../../structures/DynamicComposite";

export const test_llm_schema_3_0_DynamicComposite = _test_llm_schema({
  model: "3.0",
  name: "DynamicComposite",
})(typia.llm.schema<DynamicComposite, "3.0">());
