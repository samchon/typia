import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_validateEqualsParametersAsync_ToJsonAtomicUnion =
  (): Promise<void> =>
    _test_functional_validateEqualsParametersAsync("ToJsonAtomicUnion")(
      ToJsonAtomicUnion,
    )((p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
      typia.functional.validateEqualsParameters(p),
    );
