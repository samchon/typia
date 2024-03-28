import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertEqualsReturnAsync_AtomicClass =
  _test_functional_assertEqualsReturnAsync(TypeGuardError)("AtomicClass")(
    AtomicClass,
  )((p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.assertEqualsReturn(p),
  );
