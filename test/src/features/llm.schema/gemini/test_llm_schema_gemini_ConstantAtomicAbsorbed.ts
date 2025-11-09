import typia from "typia";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
import { _test_llm_schema } from "../../../internal/_test_llm_schema";

export const test_llm_schema_gemini_ConstantAtomicAbsorbed = (): void =>
  _test_llm_schema({
    model: "gemini",
    name: "ConstantAtomicAbsorbed",
  })(typia.llm.schema<ConstantAtomicAbsorbed, "gemini">({}));