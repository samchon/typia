import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertParametersAsyncCustom_ToJsonAtomicSimple =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ToJsonAtomicSimple",
  )(ToJsonAtomicSimple)(
    (p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
