import typia from "typia";

import { _test_functional_assertReturn } from "../../internal/_test_functional_assertReturn";
import { AtomicClass } from "../../structures/AtomicClass";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnCustom_AtomicClass = _test_functional_assertReturn(CustomGuardError)(
  "AtomicClass"
)(AtomicClass)(
  (p: (input: AtomicClass) => AtomicClass) => typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
)