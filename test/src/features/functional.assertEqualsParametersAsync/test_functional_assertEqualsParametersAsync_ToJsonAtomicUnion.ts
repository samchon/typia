import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_assertEqualsParametersAsync_ToJsonAtomicUnion =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ToJsonAtomicUnion",
  )(ToJsonAtomicUnion)(
    (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
      typia.functional.assertEqualsParameters(p),
  );
