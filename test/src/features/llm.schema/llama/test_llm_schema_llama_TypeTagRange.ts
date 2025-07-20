import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagRange } from "../../../structures/TypeTagRange";

export const test_llm_schema_llama_TypeTagRange = (): void =>
  _test_llm_schema({
    model: "llama",
    name: "TypeTagRange",
  })(typia.llm.schema<TypeTagRange, "llama">({}));
