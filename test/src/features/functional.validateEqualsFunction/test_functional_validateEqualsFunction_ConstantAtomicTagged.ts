import typia from "typia";

import { _test_functional_validateEqualsFunction } from "../../internal/_test_functional_validateEqualsFunction";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_validateEqualsFunction_ConstantAtomicTagged = (): void => _test_functional_validateEqualsFunction(
  "ConstantAtomicTagged"
)(ConstantAtomicTagged)(
  (p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) => typia.functional.validateEqualsFunction(p),
)