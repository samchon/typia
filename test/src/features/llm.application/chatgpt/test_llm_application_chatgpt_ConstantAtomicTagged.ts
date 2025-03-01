import typia from "typia";

import { _test_llm_application } from "../../../internal/_test_llm_application";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_llm_application_chatgpt_ConstantAtomicTagged =
  _test_llm_application({
    model: "chatgpt",
    name: "ConstantAtomicTagged",
    factory: ConstantAtomicTagged,
  })(typia.llm.application<ConstantAtomicTaggedApplication, "chatgpt">());

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
