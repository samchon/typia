import typia from "typia";

import { _test_functional_isReturnAsync } from "../../internal/_test_functional_isReturnAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_isReturnAsync_ConstantAtomicAbsorbed = (): Promise<void> => _test_functional_isReturnAsync(
  "ConstantAtomicAbsorbed"
)(ConstantAtomicAbsorbed)(
  (p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
    typia.functional.isReturn(p),
)