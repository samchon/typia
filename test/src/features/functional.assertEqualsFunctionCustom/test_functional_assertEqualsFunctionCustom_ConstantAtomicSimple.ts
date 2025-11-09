import typia from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionCustom_ConstantAtomicSimple = (): void => _test_functional_assertEqualsFunction(CustomGuardError)(
  "ConstantAtomicSimple"
)(ConstantAtomicSimple)(
  (p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) => typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)