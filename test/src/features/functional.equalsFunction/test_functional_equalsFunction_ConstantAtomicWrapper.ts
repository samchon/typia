import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_equalsFunction_ConstantAtomicWrapper = (): void => _test_functional_equalsFunction(
  "ConstantAtomicWrapper"
)(ConstantAtomicWrapper)(
  (p: (input: ConstantAtomicWrapper) => ConstantAtomicWrapper) => typia.functional.equalsFunction(p),
)