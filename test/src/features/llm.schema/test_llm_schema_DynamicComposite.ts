import typia from "typia";

import { _test_llm_schema } from "../../internal/_test_llm_schema";
import { DynamicComposite } from "../../structures/DynamicComposite";

export const test_llm_schema_DynamicComposite = _test_llm_schema(
  "DynamicComposite",
)(typia.llm.schema<DynamicComposite>());
