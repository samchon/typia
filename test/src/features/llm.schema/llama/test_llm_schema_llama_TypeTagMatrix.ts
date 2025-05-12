import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagMatrix } from "../../../structures/TypeTagMatrix";

export const test_llm_schema_llama_TypeTagMatrix = _test_llm_schema({
  model: "llama",
  name: "TypeTagMatrix",
})(typia.llm.schema<TypeTagMatrix, "llama">({}));
