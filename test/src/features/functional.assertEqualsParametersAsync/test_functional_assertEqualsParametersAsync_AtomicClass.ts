import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertEqualsParametersAsync_AtomicClass =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)("AtomicClass")(
    AtomicClass,
  )((p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.assertEqualsParameters(p),
  );
