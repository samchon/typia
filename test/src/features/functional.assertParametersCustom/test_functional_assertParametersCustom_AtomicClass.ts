import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParameters } from "../../internal/_test_functional_assertParameters";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_assertParametersCustom_AtomicClass =
  _test_functional_assertParameters(CustomGuardError)("AtomicClass")(
    AtomicClass,
  )((p: (input: AtomicClass) => AtomicClass) =>
    typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
