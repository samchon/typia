import typia from "typia";

import { _test_llm_applicationEquals } from "../../../internal/_test_llm_applicationEquals";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_llm_applicationEquals_gemini_ConstantAtomicTagged =
  (): void =>
    _test_llm_applicationEquals({
      model: "gemini",
      name: "ConstantAtomicTagged",
      factory: ConstantAtomicTagged,
    })(
      typia.llm.application<
        ConstantAtomicTaggedApplication,
        "gemini",
        { equals: true }
      >(),
    );

interface ConstantAtomicTaggedApplication {
  insert(p: { first: ConstantAtomicTagged }): Promise<void>;
  reduce(p: {
    first: ConstantAtomicTagged;
    second: ConstantAtomicTagged | null;
  }): Promise<ConstantAtomicTagged>;
  coalesce(p: {
    first: ConstantAtomicTagged | null;
    second: ConstantAtomicTagged | null;
    third?: ConstantAtomicTagged | null;
  }): Promise<ConstantAtomicTagged | null>;
}
