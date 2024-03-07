import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsParametersAsyncCustom_ConstantAtomicTagged =
  _test_functional_assertEqualsParametersAsync(CustomGuardError)(
    "ConstantAtomicTagged",
  )(ConstantAtomicTagged)(
    (p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
      typia.functional.assertEqualsParameters(
        p,
        (p) => new CustomGuardError(p),
      ),
  );
