import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_validateFunction_ConstantAtomicSimple = (): void => _test_functional_validateFunction(
  "ConstantAtomicSimple"
)(ConstantAtomicSimple)(
  (p: (input: ConstantAtomicSimple) => ConstantAtomicSimple) => typia.functional.validateFunction(p),
)