import typia from "typia";

import { _test_llm_parameters } from "../../../internal/_test_llm_parameters";
import { ConstantAtomicUnion } from "../../../structures/ConstantAtomicUnion";

export const test_llm_parameters_3_0_ConstantAtomicUnion = _test_llm_parameters(
  {
    model: "3.0",
    name: "ConstantAtomicUnion",
  },
)(typia.llm.parameters<ConstantAtomicUnionParameters, "3.0">());

interface ConstantAtomicUnionParameters {
  regular: ConstantAtomicUnion;
  nullable: ConstantAtomicUnion | null;
  optional: ConstantAtomicUnion | undefined;
  faint: ConstantAtomicUnion | null | undefined;
  array: Array<ConstantAtomicUnion>;
}
