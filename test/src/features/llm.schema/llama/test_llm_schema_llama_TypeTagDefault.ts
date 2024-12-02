import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagDefault } from "../../../structures/TypeTagDefault";

export const test_llm_schema_llama_TypeTagDefault = _test_llm_schema({
  model: "llama",
  name: "TypeTagDefault",
})(typia.llm.schema<TypeTagDefault, "llama">({}));
