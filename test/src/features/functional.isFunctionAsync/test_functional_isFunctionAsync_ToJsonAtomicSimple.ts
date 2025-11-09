import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_isFunctionAsync_ToJsonAtomicSimple = (): Promise<void> => _test_functional_isFunctionAsync(
  "ToJsonAtomicSimple"
)(ToJsonAtomicSimple)(
  (p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
    typia.functional.isFunction(p),
)