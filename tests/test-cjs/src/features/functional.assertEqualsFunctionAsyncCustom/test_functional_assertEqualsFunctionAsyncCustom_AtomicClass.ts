import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertEqualsFunctionAsyncCustom_AtomicClass =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(CustomGuardError)("AtomicClass")(
      AtomicClass,
    )((p: (input: AtomicClass) => Promise<AtomicClass>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
