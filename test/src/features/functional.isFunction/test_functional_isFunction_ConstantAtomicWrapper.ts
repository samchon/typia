import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_isFunction_ConstantAtomicWrapper = (): void => _test_functional_isFunction(
  "ConstantAtomicWrapper"
)(ConstantAtomicWrapper)(
  (p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) => typia.functional.isFunction(p),
)