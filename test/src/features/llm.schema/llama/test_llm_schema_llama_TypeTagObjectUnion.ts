import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_llm_schema_llama_TypeTagObjectUnion = (): void =>
  _test_llm_schema({
    model: "llama",
    name: "TypeTagObjectUnion",
  })(typia.llm.schema<TypeTagObjectUnion, "llama">({}));
