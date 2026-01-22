import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_isParametersAsync_ToJsonAtomicUnion =
  (): Promise<void> =>
    _test_functional_isParametersAsync("ToJsonAtomicUnion")(ToJsonAtomicUnion)(
      (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
        typia.functional.isParameters(p),
    );
