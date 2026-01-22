import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantAtomicWrapper } from "../../structures/ConstantAtomicWrapper";

export const test_functional_assertFunctionAsyncCustom_ConstantAtomicWrapper =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ConstantAtomicWrapper",
    )(ConstantAtomicWrapper)(
      (p: (input: ConstantAtomicWrapper) => Promise<ConstantAtomicWrapper>) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
