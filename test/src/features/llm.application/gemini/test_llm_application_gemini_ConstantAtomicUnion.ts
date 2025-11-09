import typia from "typia";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";
import { _test_llm_application } from "../../../internal/_test_llm_application";

export const test_llm_application_gemini_ConstantAtomicUnion = (): void =>
  _test_llm_application({
    model: "gemini",
    name: "ConstantAtomicUnion",
    factory: ConstantAtomicUnion
  })(
    typia.llm.application<ConstantAtomicUnionApplication, "gemini">(),
  );

interface ConstantAtomicUnionApplication {
  insert(p: { first: ConstantAtomicUnion }): Promise<void>;
  reduce(p: { first: ConstantAtomicUnion, second: ConstantAtomicUnion | null }): Promise<ConstantAtomicUnion>;
  coalesce(p: {
    first: ConstantAtomicUnion | null,
    second: ConstantAtomicUnion | null,
    third?: ConstantAtomicUnion | null,
  }): Promise<ConstantAtomicUnion | null>;
}