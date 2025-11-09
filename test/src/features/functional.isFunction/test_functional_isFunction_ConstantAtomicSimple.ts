import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_isFunction_ConstantAtomicSimple = (): void => _test_functional_isFunction(
  "ConstantAtomicSimple"
)(ConstantAtomicSimple)(
  (p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) => typia.functional.isFunction(p),
)