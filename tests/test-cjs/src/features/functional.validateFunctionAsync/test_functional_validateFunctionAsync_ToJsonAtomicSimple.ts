import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_validateFunctionAsync_ToJsonAtomicSimple =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ToJsonAtomicSimple")(
      ToJsonAtomicSimple,
    )((p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
      typia.functional.validateFunction(p),
    );
