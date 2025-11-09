import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagObjectUnion } from "../../../structures/TypeTagObjectUnion";

export const test_llm_schema_gemini_TypeTagObjectUnion = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "TypeTagObjectUnion",
  })(typia.llm.schema<TypeTagObjectUnion, "gemini">({}));
