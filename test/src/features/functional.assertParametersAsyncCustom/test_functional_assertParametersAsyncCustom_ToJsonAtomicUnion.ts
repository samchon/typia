import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ToJsonAtomicUnion = (): Promise<void> => _test_functional_assertParametersAsync(CustomGuardError)(
  "ToJsonAtomicUnion"
)(ToJsonAtomicUnion)(
  (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
)