import typia from "typia";

import { _test_functional_validateFunctionAsync } from "../../internal/_test_functional_validateFunctionAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_validateFunctionAsync_ConstantAtomicAbsorbed = (): Promise<void> => _test_functional_validateFunctionAsync(
  "ConstantAtomicAbsorbed"
)(ConstantAtomicAbsorbed)(
  (p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
    typia.functional.validateFunction(p),
)