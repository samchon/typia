import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_assertEqualsReturnAsyncCustom_ToJsonAtomicSimple =
  _test_functional_assertEqualsReturnAsync(CustomGuardError)(
    "ToJsonAtomicSimple",
  )(ToJsonAtomicSimple)(
    (p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
      typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
  );
