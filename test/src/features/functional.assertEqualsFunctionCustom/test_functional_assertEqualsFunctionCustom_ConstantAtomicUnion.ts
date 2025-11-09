import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ConstantAtomicUnion = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "ConstantAtomicUnion"
)(ConstantAtomicUnion)(
  (p: (input: ConstantAtomicUnion) => ConstantAtomicUnion) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)