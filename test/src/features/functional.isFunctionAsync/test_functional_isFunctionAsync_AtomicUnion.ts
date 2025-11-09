import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_isFunctionAsync_AtomicUnion = (): Promise<void> => _test_functional_isFunctionAsync(
  "AtomicUnion"
)(AtomicUnion)(
  (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
    typia.functional.isFunction(p),
)