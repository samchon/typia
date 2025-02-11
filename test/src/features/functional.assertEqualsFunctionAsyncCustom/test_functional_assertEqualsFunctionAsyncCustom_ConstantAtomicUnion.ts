import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_assertEqualsFunctionAsyncCustom_ConstantAtomicUnion =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ConstantAtomicUnion",
  )(ConstantAtomicUnion)(
    (p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
