import typia from "typia";

import { _test_functional_validateEqualsReturnAsync } from "../../internal/_test_functional_validateEqualsReturnAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_validateEqualsReturnAsync_ToJsonAtomicUnion = (): Promise<void> => _test_functional_validateEqualsReturnAsync(
  "ToJsonAtomicUnion"
)(ToJsonAtomicUnion)(
  (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
    typia.functional.validateEqualsReturn(p),
)