import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_assertEqualsParameters_ConstantAtomicTagged =
  _test_functional_assertEqualsParameters(TypeGuardError)(
    "ConstantAtomicTagged",
  )(ConstantAtomicTagged)(
    (p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) =>
      typia.functional.assertEqualsParameters(p),
  );
