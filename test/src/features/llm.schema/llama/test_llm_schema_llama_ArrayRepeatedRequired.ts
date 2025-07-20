import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayRepeatedRequired } from "../../../structures/ArrayRepeatedRequired";

export const test_llm_schema_llama_ArrayRepeatedRequired = (): void =>
  _test_llm_schema({
    model: "llama",
    name: "ArrayRepeatedRequired",
  })(typia.llm.schema<ArrayRepeatedRequired, "llama">({}));
