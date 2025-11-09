import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ConstantAtomicWrapper = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ConstantAtomicWrapper"
)(ConstantAtomicWrapper)(
  (p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)