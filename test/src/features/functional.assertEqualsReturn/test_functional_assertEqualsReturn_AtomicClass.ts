import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertEqualsReturn_AtomicClass =
  _test_functional_assertEqualsReturn(TypeGuardError)("AtomicClass")(
    AtomicClass,
  )((p: (input: AtomicClass) => AtomicClass) =>
    typia.functional.assertEqualsReturn(p),
  );
