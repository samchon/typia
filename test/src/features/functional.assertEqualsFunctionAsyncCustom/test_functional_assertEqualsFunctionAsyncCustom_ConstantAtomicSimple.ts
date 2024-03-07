import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ConstantAtomicSimple } from "../../structures/ConstantAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ConstantAtomicSimple =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ConstantAtomicSimple",
  )(ConstantAtomicSimple)(
    (p: (input: ConstantAtomicSimple) => Promise<ConstantAtomicSimple>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
