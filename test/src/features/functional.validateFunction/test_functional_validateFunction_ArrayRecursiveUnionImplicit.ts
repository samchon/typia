import typia from "typia";

import { _test_functional_validateFunction } from "../../internal/_test_functional_validateFunction";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_validateFunction_ArrayRecursiveUnionImplicit = (): void => _test_functional_validateFunction(
  "ArrayRecursiveUnionImplicit"
)(ArrayRecursiveUnionImplicit)(
  (p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit) => typia.functional.validateFunction(p),
)