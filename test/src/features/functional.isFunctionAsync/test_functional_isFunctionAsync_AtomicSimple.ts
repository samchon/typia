import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { AtomicSimple } from "../../structures/AtomicSimple";

export const test_functional_isFunctionAsync_AtomicSimple = _test_functional_isFunctionAsync(
  "AtomicSimple"
)(AtomicSimple)(
  (p: (input: AtomicSimple) => Promise<AtomicSimple>) =>
    typia.functional.isFunction(p),
)