import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_validateEqualsParametersAsync_ConstantAtomicTagged = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ConstantAtomicTagged"
)(ConstantAtomicTagged)(
  (p: (input: ConstantAtomicTagged) => Promise<ConstantAtomicTagged>) =>
    typia.functional.validateEqualsParameters(p),
)