import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertFunctionAsync_AtomicClass =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("AtomicClass")(
      AtomicClass,
    )((p: (input: AtomicClass) => Promise<AtomicClass>) =>
      typia.functional.assertFunction(p),
    );
