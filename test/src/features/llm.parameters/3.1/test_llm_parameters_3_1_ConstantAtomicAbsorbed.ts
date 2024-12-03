import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ConstantAtomicAbsorbed } from "../../../structures/ConstantAtomicAbsorbed";

export const test_llm_parameters_3_1_ConstantAtomicAbsorbed =
  _test_llm_parameters({
    model: "3.1",
    name: "ConstantAtomicAbsorbed",
  })(typia.llm.parameters<ConstantAtomicAbsorbedParameters, "3.1">());

interface ConstantAtomicAbsorbedParameters {
  regular: ConstantAtomicAbsorbed;
  nullable: ConstantAtomicAbsorbed | null;
  optional: ConstantAtomicAbsorbed | undefined;
  faint: ConstantAtomicAbsorbed | null | undefined;
  array: Array<ConstantAtomicAbsorbed>;
}
