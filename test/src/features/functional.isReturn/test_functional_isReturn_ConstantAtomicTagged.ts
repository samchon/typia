import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ConstantAtomicTagged } from "../../structures/ConstantAtomicTagged";

export const test_functional_isReturn_ConstantAtomicTagged = (): void => _test_functional_isReturn(
  "ConstantAtomicTagged"
)(ConstantAtomicTagged)(
  (p: (input: ConstantAtomicTagged) => ConstantAtomicTagged) => typia.functional.isReturn(p),
)