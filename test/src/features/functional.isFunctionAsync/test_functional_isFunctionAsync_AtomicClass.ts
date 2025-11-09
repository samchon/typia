import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { AtomicClass } from "../../structures/AtomicClass";

export const test_functional_isFunctionAsync_AtomicClass = (): Promise<void> => _test_functional_isFunctionAsync(
  "AtomicClass"
)(AtomicClass)(
  (p: (input: AtomicClass) => Promise<AtomicClass>) =>
    typia.functional.isFunction(p),
)