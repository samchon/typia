import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsFunctionAsyncCustom_ArrayRecursiveUnionImplicit = _test_functional_assertEqualsFunctionAsync(CustomGuardError)(
  "ArrayRecursiveUnionImplicit"
)(ArrayRecursiveUnionImplicit)(
  (p: (input: ArrayRecursiveUnionImplicit) => Promise<ArrayRecursiveUnionImplicit>) =>
    typia.functional.assertEqualsFunction(p, (p) => new CustomGuardError(p)),
)