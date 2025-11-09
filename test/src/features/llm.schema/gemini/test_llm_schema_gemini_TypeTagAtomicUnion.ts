import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { TypeTagAtomicUnion } from "../../../structures/TypeTagAtomicUnion";

export const test_llm_schema_gemini_TypeTagAtomicUnion = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "TypeTagAtomicUnion",
  })(typia.llm.schema<TypeTagAtomicUnion, "gemini">({}));
