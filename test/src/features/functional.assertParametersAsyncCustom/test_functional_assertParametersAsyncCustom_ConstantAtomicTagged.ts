import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_assertParametersAsyncCustom_ConstantAtomicTagged =
  _test_functional_assertParametersAsync(CustomGuardError)(
    "ConstantAtomicTagged",
  )(ConstantAtomicTagged)(
    (p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
      typia.functional.assertParameters(p, (p) => new CustomGuardError(p)),
  );
