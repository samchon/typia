import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { AtomicClass } from "../../structures/AtomicClass";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersCustom_AtomicClass = (): void => _test_functional_assertEqualsParameters(CustomGuardError)(
  "AtomicClass"
)(AtomicClass)(
  (p: (input: AtomicClass) => AtomicClass) => typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)