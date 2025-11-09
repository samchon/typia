import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_assertEqualsFunctionAsync_ConstantAtomicAbsorbed =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ConstantAtomicAbsorbed",
    )(ConstantAtomicAbsorbed)(
      (p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
        typia.functional.assertEqualsFunction(p),
    );
