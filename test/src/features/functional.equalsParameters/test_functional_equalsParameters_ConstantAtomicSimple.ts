import typia from "typia";

import { _test_functional_equalsParameters } from "../../internal/_test_functional_equalsParameters";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_equalsParameters_ConstantAtomicSimple = _test_functional_equalsParameters(
  "ConstantAtomicSimple"
)(ConstantAtomicSimple)(
  (p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) => typia.functional.equalsParameters(p),
)