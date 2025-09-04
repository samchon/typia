import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { ArrayUnion } from "../../../structures/ArrayUnion";

export const test_llm_schema_llama_ArrayUnion = (): void =>
  _test_llm_schema({
    model: "llama",
    name: "ArrayUnion",
  })(typia.llm.schema<ArrayUnion, "llama">({}));
