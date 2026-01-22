import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunction } from "../../internal/_test_functional_assertEqualsFunction";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertEqualsFunction_AtomicClass = (): void =>
  _test_functional_assertEqualsFunction(TypeGuardError)("AtomicClass")(
    AtomicClass,
  )((p: (input: AtomicClass) => AtomicClass) =>
    typia.functional.assertEqualsFunction(p),
  );
