import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

export const test_functional_assertFunctionAsync_ArrayAtomicSimple =
  (): Promise<void> =>
    _test_functional_assertFunctionAsync(TypeGuardError)("ArrayAtomicSimple")(
      ArrayAtomicSimple,
    )((p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
      typia.functional.assertFunction(p),
    );
