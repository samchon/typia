import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_validateReturnAsync_AtomicUnion = (): Promise<void> => _test_functional_validateReturnAsync(
  "AtomicUnion"
)(AtomicUnion)(
  (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
    typia.functional.validateReturn(p),
)