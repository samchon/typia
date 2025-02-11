import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_isFunction_ConstantAtomicUnion = _test_functional_isFunction(
  "ConstantAtomicUnion"
)(ConstantAtomicUnion)(
  (p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) => typia.functional.isFunction(p),
)