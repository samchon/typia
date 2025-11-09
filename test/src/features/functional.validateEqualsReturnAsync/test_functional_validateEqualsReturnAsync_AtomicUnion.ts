import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { AtomicUnion } from "../../structures/AtomicUnion";

export const test_functional_validateEqualsReturnAsync_AtomicUnion = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "AtomicUnion"
)(AtomicUnion)(
  (p: (input: AtomicUnion) => Promise<AtomicUnion>) =>
    typia.functional.validateEqualsReturn(p),
)