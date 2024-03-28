import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertReturnAsync_AtomicClass =
  _test_functional_assertReturnAsync(TypeGuardError)("AtomicClass")(
    AtomicClass,
  )((p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.assertReturn(p),
  );
