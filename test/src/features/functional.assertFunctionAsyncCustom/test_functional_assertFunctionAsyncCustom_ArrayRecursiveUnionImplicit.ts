import typia from "typia";

import { _test_functional_assertFunctionAsync } from "../../internal/_test_functional_assertFunctionAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionAsyncCustom_ArrayRecursiveUnionImplicit = _test_functional_assertFunctionAsync(CustomGuardError)(
  "ArrayRecursiveUnionImplicit"
)(ArrayRecursiveUnionImplicit)(
  (p: (input: ArrayRecursiveUnionImplicit) => Promise<ArrayRecursiveUnionImplicit>) =>
    typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)