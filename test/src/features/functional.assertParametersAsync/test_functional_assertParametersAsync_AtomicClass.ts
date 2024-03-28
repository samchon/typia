import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertParametersAsync_AtomicClass =
  _test_functional_assertParametersAsync(TypeGuardError)("AtomicClass")(
    AtomicClass,
  )((p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.assertParameters(p),
  );
