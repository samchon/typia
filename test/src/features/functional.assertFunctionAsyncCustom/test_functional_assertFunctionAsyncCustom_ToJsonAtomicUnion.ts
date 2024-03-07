import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ToJsonAtomicUnion =
  _test_functional_assertFunctionAsync(CustomGuardError)("ToJsonAtomicUnion")(
    ToJsonAtomicUnion,
  )((p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
