import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayAny } from "../../../structures/ArrayAny";

export const test_llm_schema_llama_ArrayAny = (): void =>
  _test_llm_schema({
    model: "llama",
    name: "ArrayAny",
  })(typia.llm.schema<ArrayAny, "llama">({}));
