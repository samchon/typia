import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { AtomicClass } from "../../structures/AtomicClass";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_AtomicClass = (): Promise<void> => _test_functional_assertReturnAsync(CustomGuardError)(
  "AtomicClass"
)(AtomicClass)(
  (p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)