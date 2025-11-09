import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_isReturn_ConstantAtomicWrapper = (): void => _test_functional_isReturn(
  "ConstantAtomicWrapper"
)(ConstantAtomicWrapper)(
  (p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) => typia.functional.isReturn(p),
)