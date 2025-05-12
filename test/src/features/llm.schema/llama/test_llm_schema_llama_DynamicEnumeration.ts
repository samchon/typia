import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicEnumeration } from "../../../structures/DynamicEnumeration";

export const test_llm_schema_llama_DynamicEnumeration = _test_llm_schema({
  model: "llama",
  name: "DynamicEnumeration",
})(typia.llm.schema<DynamicEnumeration, "llama">({}));
