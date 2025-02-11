import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_validateEqualsFunctionAsync_AtomicSimple = _test_functional_validateEqualsFunctionAsync(
  "AtomicSimple"
)(AtomicSimple)(
  (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.validateEqualsFunction(p),
)