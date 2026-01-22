import typia from "typia";

import { _test_functional_equalsParametersAsync } from "../../internal/_test_functional_equalsParametersAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_equalsParametersAsync_ToJsonAtomicUnion =
  (): Promise<void> =>
    _test_functional_equalsParametersAsync("ToJsonAtomicUnion")(
      ToJsonAtomicUnion,
    )((p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
      typia.functional.equalsParameters(p),
    );
