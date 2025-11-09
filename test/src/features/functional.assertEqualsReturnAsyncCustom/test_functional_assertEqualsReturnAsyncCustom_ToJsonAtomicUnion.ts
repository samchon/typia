import typia from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnAsyncCustom_ToJsonAtomicUnion = (): Promise<void> => _test_functional_assertEqualsReturnAsync(CustomGuardError)(
  "ToJsonAtomicUnion"
)(ToJsonAtomicUnion)(
  (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)