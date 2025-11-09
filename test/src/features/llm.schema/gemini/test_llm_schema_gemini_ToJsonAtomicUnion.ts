import typia from "typia";
import { ToJsonAtomicUnion } from "../../../structures/ToJsonAtomicUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ToJsonAtomicUnion = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ToJsonAtomicUnion",
  })(typia.llm.schema<ToJsonAtomicUnion, "gemini">({}));