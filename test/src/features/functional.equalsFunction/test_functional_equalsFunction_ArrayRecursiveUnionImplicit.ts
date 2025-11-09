import typia from "typia";

import { _test_functional_equalsFunction } from "../../internal/_test_functional_equalsFunction";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_functional_equalsFunction_ArrayRecursiveUnionImplicit = (): void => _test_functional_equalsFunction(
  "ArrayRecursiveUnionImplicit"
)(ArrayRecursiveUnionImplicit)(
  (p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit) => typia.functional.equalsFunction(p),
)