import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ToJsonAtomicUnion } from "../../structures/ToJsonAtomicUnion";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ToJsonAtomicUnion =
  _test_functional_assertFunctionAsync(TypeGuardError)("ToJsonAtomicUnion")(
    ToJsonAtomicUnion,
  )((p: (input: ToJsonAtomicUnion) => Promise<ToJsonAtomicUnion>) =>
    typia.functional.assertFunction(p),
  );
