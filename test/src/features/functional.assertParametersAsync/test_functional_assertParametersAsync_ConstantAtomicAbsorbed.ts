import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ConstantAtomicAbsorbed = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "ConstantAtomicAbsorbed"
)(ConstantAtomicAbsorbed)(
  (p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
    typia.functional.assertParameters(p),
)