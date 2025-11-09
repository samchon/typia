import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArrayAtomicSimple } from "../../structures/ArrayAtomicSimple";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ArrayAtomicSimple = (): Promise<void> => _test_functional_assertParametersAsync(TypeGuardError)(
  "ArrayAtomicSimple"
)(ArrayAtomicSimple)(
  (p: (input: ArrayAtomicSimple) => Promise<ArrayAtomicSimple>) =>
    typia.functional.assertParameters(p),
)