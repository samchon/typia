import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_validateFunctionAsync_ToJsonAtomicUnion =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ToJsonAtomicUnion")(
      ToJsonAtomicUnion,
    )((p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
      typia.functional.validateFunction(p),
    );
