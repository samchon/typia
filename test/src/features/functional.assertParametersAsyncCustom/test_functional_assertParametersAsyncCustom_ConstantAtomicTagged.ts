import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ConstantAtomicTagged = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ConstantAtomicTagged"
)(ConstantAtomicTagged)(
  (p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)