import typia from "typia";

import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ToJsonAtomicSimple } from "../../structures/ToJsonAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertReturnAsyncCustom_ToJsonAtomicSimple =
  _test_functional_assertReturnAsync(CustomGuardError)("ToJsonAtomicSimple")(
    ToJsonAtomicSimple,
  )((p: (input: ToJsonAtomicSimple) => Promise<ToJsonAtomicSimple>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
