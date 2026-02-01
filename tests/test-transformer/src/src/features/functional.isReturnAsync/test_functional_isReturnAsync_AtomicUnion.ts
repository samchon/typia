import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_isReturnAsync_AtomicUnion = (): Promise<void> => _test_functional_isReturnAsync(
  "AtomicUnion"
)(AtomicUnion)(
  (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
    typia.functional.isReturn(p),
)