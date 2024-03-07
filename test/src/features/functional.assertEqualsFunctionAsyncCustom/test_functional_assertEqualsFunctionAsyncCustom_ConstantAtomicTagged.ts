import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ConstantAtomicTagged =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ConstantAtomicTagged",
  )(ConstantAtomicTagged)(
    (p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
