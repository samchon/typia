import typia from "typia";
import { AtomicUnion } from "../../../structures/AtomicUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_AtomicUnion = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "AtomicUnion",
  })(typia.llm.schema<AtomicUnion, "gemini">({}));