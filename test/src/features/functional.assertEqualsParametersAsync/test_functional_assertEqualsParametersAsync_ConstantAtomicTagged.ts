import typia from "typia";

import { _test_functional_assertEqualsParametersAsync } from "../../internal/_test_functional_assertEqualsParametersAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParametersAsync_ConstantAtomicTagged =
  _test_functional_assertEqualsParametersAsync(TypeGuardError)(
    "ConstantAtomicTagged",
  )(ConstantAtomicTagged)(
    (p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
      typia.functional.assertEqualsParameters(p),
  );
