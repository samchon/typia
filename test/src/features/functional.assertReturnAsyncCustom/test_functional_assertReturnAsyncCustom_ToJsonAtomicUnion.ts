import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ToJsonAtomicUnion =
  _test_functional_assertReturnAsync(CustomGuardError)("ToJsonAtomicUnion")(
    ToJsonAtomicUnion,
  )((p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
