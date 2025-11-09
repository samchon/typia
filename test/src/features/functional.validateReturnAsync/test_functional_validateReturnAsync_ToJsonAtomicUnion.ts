import typia from "typia";

import { _test_functional_validateReturnAsync } from "../../internal/_test_functional_validateReturnAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_validateReturnAsync_ToJsonAtomicUnion =
  (): Promise<void> =>
    _test_functional_validateReturnAsync("ToJsonAtomicUnion")(
      ToJsonAtomicUnion,
    )((p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
      typia.functional.validateReturn(p),
    );
