import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_assertFunctionAsync_ConstantAtomicAbsorbed =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)(
      "ConstantAtomicAbsorbed",
    )(ConstantAtomicAbsorbed)(
      (p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
        typia.functional.assertFunction(p),
    );
