import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_assertEqualsParametersAsync_ToJsonAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertEqualsParametersAsync(TypeGuardError)(
      "ToJsonAtomicSimple",
    )(ToJsonAtomicSimple)(
      (p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
        typia.functional.assertEqualsParameters(p),
    );
