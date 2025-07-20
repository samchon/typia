import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_llm_applicationEquals_gemini_ConstantAtomicAbsorbed =
  (): void =>
    _test_llm_applicationEquals({
      model: "gemini",
      name: "ConstantAtomicAbsorbed",
      factory: ConstantAtomicAbsorbed,
    })(
      typia.llm.application<
        ConstantAtomicAbsorbedApplication,
        "gemini",
        { equal: true }
      >(),
    );

interface ConstantAtomicAbsorbedApplication {
  insert(p: { first: ConstantAtomicAbsorbed }): Promise<void>;
  reduce(p: {
    first: ConstantAtomicAbsorbed;
    second: ConstantAtomicAbsorbed | null;
  }): Promise<ConstantAtomicAbsorbed>;
  coalesce(p: {
    first: ConstantAtomicAbsorbed | null;
    second: ConstantAtomicAbsorbed | null;
    third?: ConstantAtomicAbsorbed | null;
  }): Promise<ConstantAtomicAbsorbed | null>;
}
