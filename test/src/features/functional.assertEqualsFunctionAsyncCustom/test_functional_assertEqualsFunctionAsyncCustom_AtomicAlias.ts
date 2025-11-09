import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { AtomicAlias } from "../../structures/AtomicAlias";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_AtomicAlias = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "AtomicAlias"
)(AtomicAlias)(
  (p: (input: AtomicAlias) => Promise<AtomicAlias>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)