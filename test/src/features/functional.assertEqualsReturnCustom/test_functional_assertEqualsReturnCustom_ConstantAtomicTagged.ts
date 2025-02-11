import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ConstantAtomicTagged = _test_functional_assertEqualsReturn(CustomGuardError)(
  "ConstantAtomicTagged"
)(ConstantAtomicTagged)(
  (p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)