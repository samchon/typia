import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArraySimple } from "../../structures/ArraySimple";

import { TypeGuardError } from "typia";

export const test_functional_assertFunctionAsync_ArraySimple = _test_functional_assertFunctionAsync(TypeGuardError)(
  "ArraySimple"
)(ArraySimple)(
  (p: (input: ArraySimple) => Promise<ArraySimple>) =>
    typia.functional.assertFunction(p),
)