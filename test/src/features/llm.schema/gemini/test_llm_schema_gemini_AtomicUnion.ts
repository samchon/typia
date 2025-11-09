import typia from "typia";

import { _test_llm_schema } from "../../../internal/_test_llm_schema";
import { AtomicUnion } from "../../../structures/AtomicUnion";

export const test_llm_schema_gemini_AtomicUnion = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "AtomicUnion",
  })(typia.llm.schema<AtomicUnion, "gemini">({}));
