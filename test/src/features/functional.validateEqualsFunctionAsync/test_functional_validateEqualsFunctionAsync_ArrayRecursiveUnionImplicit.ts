import typia from "typia";

import { _test_functional_validateEqualsFunctionAsync } from "../../internal/_test_functional_validateEqualsFunctionAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_validateEqualsFunctionAsync_ArrayRecursiveUnionImplicit = _test_functional_validateEqualsFunctionAsync(
  "ArrayRecursiveUnionImplicit"
)(ArrayRecursiveUnionImplicit)(
  (p: (input: ArrayRecursiveUnionImplicit) => Promise<ArrayRecursiveUnionImplicit>) =>
    typia.functional.validateEqualsFunction(p),
)