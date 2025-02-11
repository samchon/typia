import typia from "typia";

import { _test_functional_assertEqualsFunctionAsync } from "../../internal/_test_functional_assertEqualsFunctionAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsFunctionAsync_ArrayRecursiveUnionImplicit = _test_functional_assertEqualsFunctionAsync(TypeGuardError)(
  "ArrayRecursiveUnionImplicit"
)(ArrayRecursiveUnionImplicit)(
  (p: (input: ArrayRecursiveUnionImplicit) => Promise<ArrayRecursiveUnionImplicit>) =>
    typia.functional.assertEqualsFunction(p),
)