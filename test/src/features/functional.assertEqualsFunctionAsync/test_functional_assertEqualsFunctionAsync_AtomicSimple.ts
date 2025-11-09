import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_AtomicSimple = (): Promise<void> => _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "AtomicSimple"
)(AtomicSimple)(
  (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.assertEqualsFunction(p),
)