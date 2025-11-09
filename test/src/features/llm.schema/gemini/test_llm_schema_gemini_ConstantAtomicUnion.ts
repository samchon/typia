import typia from "typia";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ConstantAtomicUnion = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ConstantAtomicUnion",
  })(typia.llm.schema<ConstantAtomicUnion, "gemini">({}));