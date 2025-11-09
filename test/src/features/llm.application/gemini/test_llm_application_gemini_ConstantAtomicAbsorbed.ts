import typia from "typia";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_ConstantAtomicAbsorbed = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "ConstantAtomicAbsorbed",
    factory: ConstantAtomicAbsorbed
  })(
    typia.llm.application<ConstantAtomicAbsorbedApplication, "gemini">(),
  );

interface ConstantAtomicAbsorbedApplication {
  insert(p: { first: ConstantAtomicAbsorbed }): Promise<void>;
  reduce(p: { first: ConstantAtomicAbsorbed, second: ConstantAtomicAbsorbed | null }): Promise<ConstantAtomicAbsorbed>;
  coalesce(p: {
    first: ConstantAtomicAbsorbed | null,
    second: ConstantAtomicAbsorbed | null,
    third?: ConstantAtomicAbsorbed | null,
  }): Promise<ConstantAtomicAbsorbed | null>;
}