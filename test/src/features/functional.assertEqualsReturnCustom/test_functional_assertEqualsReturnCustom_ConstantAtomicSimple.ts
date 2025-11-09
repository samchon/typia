import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ConstantAtomicSimple = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "ConstantAtomicSimple"
)(ConstantAtomicSimple)(
  (p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)