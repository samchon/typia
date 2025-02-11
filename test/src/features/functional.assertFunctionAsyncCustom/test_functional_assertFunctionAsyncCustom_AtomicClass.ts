import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertFunctionAsyncCustom_AtomicClass =
  _test_functional_assertFunctionAsync(CustomGuardError)("AtomicClass")(
    AtomicClass,
  )((p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
