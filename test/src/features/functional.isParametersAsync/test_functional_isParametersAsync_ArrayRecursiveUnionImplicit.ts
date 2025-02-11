import typia from "typia";

import { _test_functional_isParametersAsync } from "../../internal/_test_functional_isParametersAsync";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_isParametersAsync_ArrayRecursiveUnionImplicit = _test_functional_isParametersAsync(
  "ArrayRecursiveUnionImplicit"
)(ArrayRecursiveUnionImplicit)(
  (p: (input: ArrayRecursiveUnionImplicit) => Promise<ArrayRecursiveUnionImplicit>) =>
    typia.functional.isParameters(p),
)