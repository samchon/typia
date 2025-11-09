import typia from "typia";

import { _test_functional_isFunction } from "../../internal/_test_functional_isFunction";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_isFunction_ConstantAtomicAbsorbed = (): void => _test_functional_isFunction(
  "ConstantAtomicAbsorbed"
)(ConstantAtomicAbsorbed)(
  (p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) => typia.functional.isFunction(p),
)