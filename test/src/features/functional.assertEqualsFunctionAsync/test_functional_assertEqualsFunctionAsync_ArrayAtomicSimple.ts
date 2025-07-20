import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_assertEqualsFunctionAsync_ArrayAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
      "ArrayAtomicSimple",
    )(ArrayAtomicSimple)(
      (p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
        typia.functional.assertEqualsFunction(p),
    );
