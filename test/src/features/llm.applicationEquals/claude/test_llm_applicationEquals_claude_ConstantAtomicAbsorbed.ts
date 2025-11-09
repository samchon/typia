import typia from "typia";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";
import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";

export const test_llm_applicationEquals_claude_ConstantAtomicAbsorbed = (): void =>
  _test_llm_applicationEquals({
    model: "claude",
    name: "ConstantAtomicAbsorbed",
    factory: ConstantAtomicAbsorbed
  })(
    typia.llm.application<ConstantAtomicAbsorbedApplication, "claude", { equals: true }>(),
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