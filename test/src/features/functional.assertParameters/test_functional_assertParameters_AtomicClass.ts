import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertParameters_AtomicClass =
  _test_functional_assertParameters(TypeGuardError)("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => AtomicClass) =>
      typia.functional.assertParameters(p),
  );
