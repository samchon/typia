import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_isReturn_ConstantAtomicSimple = (): void => _test_functional_isReturn(
  "ConstantAtomicSimple"
)(ConstantAtomicSimple)(
  (p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) => typia.functional.isReturn(p),
)