import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_ConstantAtomicTagged = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "ConstantAtomicTagged"
)(ConstantAtomicTagged)(
  (p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)