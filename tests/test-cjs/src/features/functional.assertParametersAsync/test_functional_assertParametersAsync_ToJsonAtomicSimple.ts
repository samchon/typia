import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_assertParametersAsync_ToJsonAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ToJsonAtomicSimple",
    )(ToJsonAtomicSimple)(
      (p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
        typia.functional.assertParameters(p),
    );
