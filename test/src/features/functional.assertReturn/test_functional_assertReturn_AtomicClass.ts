import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertReturn_AtomicClass = (): void =>
  _test_functional_assertReturn(TypeGuardError)("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => AtomicClass) =>
      typia.functional.assertReturn(p),
  );
