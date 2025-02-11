import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_assertEqualsReturnAsyncCustom_ToJsonAtomicUnion =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ToJsonAtomicUnion",
  )(ToJsonAtomicUnion)(
    (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
