import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_assertEqualsReturnAsyncCustom_ConstantAtomicTagged =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(CustomGuardError)(
      "ConstantAtomicTagged",
    )(ConstantAtomicTagged)(
      (p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
        typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
    );
