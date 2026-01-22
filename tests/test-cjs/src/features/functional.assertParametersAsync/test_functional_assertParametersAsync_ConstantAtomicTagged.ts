import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_assertParametersAsync_ConstantAtomicTagged =
  (): Promise<void> =>
    _test_functional_assertParametersAsync(TypeGuardError)(
      "ConstantAtomicTagged",
    )(ConstantAtomicTagged)(
      (p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
        typia.functional.assertParameters(p),
    );
