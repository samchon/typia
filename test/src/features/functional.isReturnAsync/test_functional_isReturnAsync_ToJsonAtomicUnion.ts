import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_isReturnAsync_ToJsonAtomicUnion = (): Promise<void> => _test_functional_isReturnAsync(
  "ToJsonAtomicUnion"
)(ToJsonAtomicUnion)(
  (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
    typia.functional.isReturn(p),
)