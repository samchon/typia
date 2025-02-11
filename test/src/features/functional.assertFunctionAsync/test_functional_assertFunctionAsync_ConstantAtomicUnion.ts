import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ConstantAtomicUnion } from "../../structures/ConstantAtomicUnion";

export const test_functional_assertFunctionAsync_ConstantAtomicUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("ConstantAtomicUnion")(
    ConstantAtomicUnion,
  )((p: (input: ConstantAtomicUnion) => Promise<ConstantAtomicUnion>) =>
    typia.functional.assertFunction(p),
  );
