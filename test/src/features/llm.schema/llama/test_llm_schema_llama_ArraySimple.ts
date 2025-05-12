import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArraySimple } from "../../../structures/ArraySimple";

export const test_llm_schema_llama_ArraySimple = _test_llm_schema({
  model: "llama",
  name: "ArraySimple",
})(typia.llm.schema<ArraySimple, "llama">({}));
