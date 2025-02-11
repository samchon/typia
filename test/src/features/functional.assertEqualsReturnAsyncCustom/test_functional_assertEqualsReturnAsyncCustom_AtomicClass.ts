import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertEqualsReturnAsyncCustom_AtomicClass =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)("AtomicClass")(
    AtomicClass,
  )((p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
