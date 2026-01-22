import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

export const test_functional_assertFunctionAsync_ConstantAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)(
      "ConstantAtomicSimple",
    )(ConstantAtomicSimple)(
      (p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
        typia.functional.assertFunction(p),
    );
