import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { DynamicNever } from "../../../structures/DynamicNever";

export const test_llm_schema_llama_DynamicNever = _test_llm_schema({
  model: "llama",
  name: "DynamicNever",
})(typia.llm.schema<DynamicNever, "llama">({}));
