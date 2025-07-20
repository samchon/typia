import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertReturnCustom_AtomicClass = (): void =>
  _test_functional_assertReturn(CustomGuardError)("AtomicClass")(AtomicClass)(
    (p: (input: AtomicClass) => AtomicClass) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
