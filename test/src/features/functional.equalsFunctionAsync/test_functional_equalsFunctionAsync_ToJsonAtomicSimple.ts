import typia from "typia";

import { _test_functional_equalsFunctionAsync } from "../../internal/_test_functional_equalsFunctionAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_equalsFunctionAsync_ToJsonAtomicSimple =
  (): Promise<void> =>
    _test_functional_equalsFunctionAsync("ToJsonAtomicSimple")(
      ToJsonAtomicSimple,
    )((p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
      typia.functional.equalsFunction(p),
    );
