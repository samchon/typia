import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsReturnAsync } from "../../internal/_test_functional_assertEqualsReturnAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_assertEqualsReturnAsync_ConstantAtomicTagged =
  (): Promise<void> =>
    _test_functional_assertEqualsReturnAsync(TypeGuardError)(
      "ConstantAtomicTagged",
    )(ConstantAtomicTagged)(
      (p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
        typia.functional.assertEqualsReturn(p),
    );
