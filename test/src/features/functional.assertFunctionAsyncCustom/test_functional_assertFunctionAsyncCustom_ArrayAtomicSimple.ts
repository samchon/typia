import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ArrayAtomicSimple = (): Promise<void> => _test_functional_assertFunctionAsync(CustomGuardError)(
  "ArrayAtomicSimple"
)(ArrayAtomicSimple)(
  (p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)