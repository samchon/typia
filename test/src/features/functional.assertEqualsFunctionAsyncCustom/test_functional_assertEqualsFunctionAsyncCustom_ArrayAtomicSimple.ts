import typia from "typia";

import { CustomGuardError } from "../../internal/CustomGuardError";
import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_assertEqualsFunctionAsyncCustom_ArrayAtomicSimple =
  _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
    "ArrayAtomicSimple",
  )(ArrayAtomicSimple)(
    (p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
      typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
  );
