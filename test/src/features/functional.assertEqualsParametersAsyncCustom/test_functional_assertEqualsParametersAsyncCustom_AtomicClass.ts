import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { AtomicClass } from "../../structures/AtomicClass";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_AtomicClass = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "AtomicClass"
)(AtomicClass)(
  (p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)