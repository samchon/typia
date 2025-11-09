import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { AtomicClass } from "../../structures/AtomicClass";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_AtomicClass = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "AtomicClass"
)(AtomicClass)(
  (p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.assertEqualsFunction(p),
)