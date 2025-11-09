import typia from "typia";

import { _test_functional_validateEqualsParameters } from "../../internal/_test_functional_validateEqualsParameters";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_functional_validateEqualsParameters_ArrayRecursiveUnionExplicit = (): void => _test_functional_validateEqualsParameters(
  "ArrayRecursiveUnionExplicit"
)(ArrayRecursiveUnionExplicit)(
  (p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit) => typia.functional.validateEqualsParameters(p),
)