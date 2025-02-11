import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_equalsFunctionAsync_AtomicClass = _test_functional_equalsFunctionAsync(
  "AtomicClass"
)(AtomicClass)(
  (p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.equalsFunction(p),
)