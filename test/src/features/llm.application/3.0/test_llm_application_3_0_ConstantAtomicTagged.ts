import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_llm_application_3_0_ConstantAtomicTagged =
  _test_llm_application({
    model: "3.0",
    name: "ConstantAtomicTagged",
  })(typia.llm.application<ConstantAtomicTaggedApplication, "3.0">());

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
