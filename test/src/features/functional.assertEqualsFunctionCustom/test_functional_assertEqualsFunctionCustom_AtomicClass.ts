import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertEqualsFunctionCustom_AtomicClass =
  (): void =>
    _test_functional_assertEqualsFunction(CustomGuardError)("AtomicClass")(
      AtomicClass,
    )((p: (input: AtomicClass) => AtomicClass) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
    );
