import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagFormat } from "../../../structures/TypeTagFormat";

export const test_llm_schema_llama_TypeTagFormat = _test_llm_schema({
  model: "llama",
  name: "TypeTagFormat",
})(typia.llm.schema<TypeTagFormat, "llama">({}));
