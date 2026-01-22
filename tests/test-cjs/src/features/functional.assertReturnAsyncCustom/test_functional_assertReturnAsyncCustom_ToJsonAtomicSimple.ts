import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

export const test_functional_assertReturnAsyncCustom_ToJsonAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertReturnAsync(CustomGuardError)("ToJsonAtomicSimple")(
      ToJsonAtomicSimple,
    )((p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
      typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
    );
