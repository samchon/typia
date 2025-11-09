import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_AtomicSimple = (): Promise<void> => _test_functional_assertEqualsParametersAsync(CustomGuardError)(
  "AtomicSimple"
)(AtomicSimple)(
  (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.assertEqualsParameters(p, (p) => new CustomGuardError(p)),
)