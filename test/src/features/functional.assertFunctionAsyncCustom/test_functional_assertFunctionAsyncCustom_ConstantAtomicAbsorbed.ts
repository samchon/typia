import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantAtomicAbsorbed } from "../../structures/ConstantAtomicAbsorbed";

export const test_functional_assertFunctionAsyncCustom_ConstantAtomicAbsorbed =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ConstantAtomicAbsorbed",
    )(ConstantAtomicAbsorbed)(
      (p: (input: ConstantAtomicAbsorbed) => Promise<ConstantAtomicAbsorbed>) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
