import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagType } from "../../../structures/TypeTagType";

export const test_llm_schema_llama_TypeTagType = _test_llm_schema({
  model: "llama",
  name: "TypeTagType",
})(typia.llm.schema<TypeTagType, "llama">({}));
