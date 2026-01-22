import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertFunctionCustom_AtomicClass = (): void =>
  _test_functional_assertFunction(CustomGuardError)("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => AtomicClass) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
