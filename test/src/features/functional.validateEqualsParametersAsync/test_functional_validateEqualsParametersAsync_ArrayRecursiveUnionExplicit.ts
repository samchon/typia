import typia from "typia";

import { _test_functional_validateEqualsParametersAsync } from "../../internal/_test_functional_validateEqualsParametersAsync";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_validateEqualsParametersAsync_ArrayRecursiveUnionExplicit = (): Promise<void> => _test_functional_validateEqualsParametersAsync(
  "ArrayRecursiveUnionExplicit"
)(ArrayRecursiveUnionExplicit)(
  (p: (input: ArrayRecursiveUnionExplicit) => Promise<ArrayRecursiveUnionExplicit>) =>
    typia.functional.validateEqualsParameters(p),
)