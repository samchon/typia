import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertReturnAsync } from "../../internal/_test_functional_assertReturnAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_assertReturnAsyncCustom_ConstantAtomicTagged =
  _test_functional_assertReturnAsync(CustomGuardError)("ConstantAtomicTagged")(
    ConstantAtomicTagged,
  )((p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
    typia.functional.assertReturn(p, (p) => new CustomGuardError(p)),
  );
