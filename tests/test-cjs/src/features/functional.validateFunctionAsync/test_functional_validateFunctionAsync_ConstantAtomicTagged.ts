import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_validateFunctionAsync_ConstantAtomicTagged =
  (): Promise<void> =>
    _test_functional_validateFunctionAsync("ConstantAtomicTagged")(
      ConstantAtomicTagged,
    )((p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
      typia.functional.validateFunction(p),
    );
