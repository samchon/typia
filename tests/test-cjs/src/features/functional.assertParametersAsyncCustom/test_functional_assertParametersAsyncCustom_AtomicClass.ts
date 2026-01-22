import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertParametersAsyncCustom_AtomicClass =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)("AtomicClass")(
      AtomicClass,
    )((p: (input: AtomicClass) => Promise<AtomicClass>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
