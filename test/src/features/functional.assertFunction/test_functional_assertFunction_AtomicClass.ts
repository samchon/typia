import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertFunction_AtomicClass =
  _test_functional_assertFunction(TypeGuardError)("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => AtomicClass) =>
      typia.functional.assertFunction(p),
  );
