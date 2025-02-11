import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertEqualsParametersAsyncCustom_AtomicClass =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)("AtomicClass")(
    AtomicClass,
  )((p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
  );
