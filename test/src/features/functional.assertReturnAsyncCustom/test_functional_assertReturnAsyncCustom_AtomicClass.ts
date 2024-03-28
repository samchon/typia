import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertReturnAsyncCustom_AtomicClass =
  _test_functional_assertReturnAsync(CustomGuardError)("AtomicClass")(
    AtomicClass,
  )((p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
