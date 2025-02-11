import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_ConstantAtomicUnion = _test_functional_assertFunction(TypeGuardError)(
  "ConstantAtomicUnion"
)(ConstantAtomicUnion)(
  (p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) => typia.functional.assertFunction(p),
)