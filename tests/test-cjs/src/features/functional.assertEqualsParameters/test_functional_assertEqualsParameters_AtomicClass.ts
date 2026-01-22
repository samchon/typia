import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertEqualsParameters_AtomicClass = (): void =>
  _test_functional_assertEqualsParameters(TypeGuardError)("AtomicClass")(
    AtomicClass,
  )((p: (input: AtomicClass) => AtomicClass) =>
    typia.functional.assertEqualsParameters(p),
  );
