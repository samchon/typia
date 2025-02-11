import typia from "typia";

import { _test_functional_isParameters } from "../../internal/_test_functional_isParameters";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_isParameters_ConstantAtomicSimple = _test_functional_isParameters(
  "ConstantAtomicSimple"
)(ConstantAtomicSimple)(
  (p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) => typia.functional.isParameters(p),
)