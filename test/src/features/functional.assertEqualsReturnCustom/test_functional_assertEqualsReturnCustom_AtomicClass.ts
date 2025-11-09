import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertEqualsReturnCustom_AtomicClass = (): void =>
  _test_functional_assertEqualsReturn(CustomGuardError)("AtomicClass")(
    AtomicClass,
  )((p: (input: AtomicClass) => AtomicClass) =>
    typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
