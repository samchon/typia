import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_assertParametersAsyncCustom_ToJsonAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(CustomGuardError)(
      "ToJsonAtomicSimple",
    )(ToJsonAtomicSimple)(
      (p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
        typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
    );
