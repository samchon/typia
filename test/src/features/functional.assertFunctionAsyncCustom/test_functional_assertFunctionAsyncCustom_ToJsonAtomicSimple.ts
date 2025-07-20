import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_assertFunctionAsyncCustom_ToJsonAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ToJsonAtomicSimple",
    )(ToJsonAtomicSimple)(
      (p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
