import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_assertFunctionAsyncCustom_ConstantAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(CustomGuardError)(
      "ConstantAtomicSimple",
    )(ConstantAtomicSimple)(
      (p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
        typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
    );
