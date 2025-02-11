import typia from "typia";

import { _test_functional_isFunctionAsync } from "../../internal/_test_functional_isFunctionAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_isFunctionAsync_ToJsonAtomicUnion =
  _test_functional_isFunctionAsync("ToJsonAtomicUnion")(ToJsonAtomicUnion)(
    (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
      typia.functional.isFunction(p),
  );
