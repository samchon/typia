import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_llm_parameters_llama_ConstantAtomicTagged =
  _test_llm_parameters({
    model: "llama",
    name: "ConstantAtomicTagged",
  })(typia.llm.parameters<ConstantAtomicTaggedParameters, "llama">());

interface ConstantAtomicTaggedParameters {
  regular: ConstantAtomicTagged;
  nullable: ConstantAtomicTagged | null;
  optional: ConstantAtomicTagged | undefined;
  faint: ConstantAtomicTagged | null | undefined;
  array: Array<ConstantAtomicTagged>;
}
