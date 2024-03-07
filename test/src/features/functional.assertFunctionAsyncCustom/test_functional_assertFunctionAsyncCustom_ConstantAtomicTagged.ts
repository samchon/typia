import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ConstantAtomicTagged =
  _test_functional_assertFunctionAsync(CustomGuardError)(
    "ConstantAtomicTagged",
  )(ConstantAtomicTagged)(
    (p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
      typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
  );
