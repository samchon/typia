import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayAtomicAlias } from "../../structures/ArrayAtomicAlias";

export const test_functional_assertFunctionAsync_ArrayAtomicAlias =
  _test_functional_assertFunctionAsync(TypeGuardError)("ArrayAtomicAlias")(
    ArrayAtomicAlias,
  )((p: (input: ArrayAtomicAlias) => Promise<ArrayAtomicAlias>) =>
    typia.functional.assertFunction(p),
  );
