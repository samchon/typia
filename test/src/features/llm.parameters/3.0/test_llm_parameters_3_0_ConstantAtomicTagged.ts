import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ConstantAtomicTagged } from "../../../structures/ConstantAtomicTagged";

export const test_llm_parameters_3_0_ConstantAtomicTagged =
  _test_llm_parameters({
    model: "3.0",
    name: "ConstantAtomicTagged",
  })(typia.llm.parameters<ConstantAtomicTaggedParameters, "3.0">());

interface ConstantAtomicTaggedParameters {
  regular: ConstantAtomicTagged;
  nullable: ConstantAtomicTagged | null;
  optional: ConstantAtomicTagged | undefined;
  faint: ConstantAtomicTagged | null | undefined;
  array: Array<ConstantAtomicTagged>;
}
