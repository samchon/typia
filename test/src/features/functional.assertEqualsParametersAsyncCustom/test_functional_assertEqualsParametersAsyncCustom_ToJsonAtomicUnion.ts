import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

export const test_functional_assertEqualsParametersAsyncCustom_ToJsonAtomicUnion =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(CustomGuardError)(
      "ToJsonAtomicUnion",
    )(ToJsonAtomicUnion)(
      (p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
        typia.functional.assertEqualsParameters(
          p,
          (p) => new CustomGuardError(p),
        ),
    );
