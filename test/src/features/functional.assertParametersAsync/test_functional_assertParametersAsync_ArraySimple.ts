import typia from "typia";

import { _test_functional_assertParametersAsync } from "../../internal/_test_functional_assertParametersAsync";
import { ArraySimple } from "../../structures/ArraySimple";

import { TypeGuardError } from "typia";

export const test_functional_assertParametersAsync_ArraySimple = _test_functional_assertParametersAsync(TypeGuardError)(
  "ArraySimple"
)(ArraySimple)(
  (p: (input: ArraySimple) => Promise<ArraySimple>) =>
    typia.functional.assertParameters(p),
)