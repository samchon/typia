import typia from "typia";

import { _test_functional_isReturn } from "../../internal/_test_functional_isReturn";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_isReturn_ConstantAtomicAbsorbed = (): void => _test_functional_isReturn(
  "ConstantAtomicAbsorbed"
)(ConstantAtomicAbsorbed)(
  (p: (input: ConstantAtomicAbsorbed) => ConstantAtomicAbsorbed) => typia.functional.isReturn(p),
)