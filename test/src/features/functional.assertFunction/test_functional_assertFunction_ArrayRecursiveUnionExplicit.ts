import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertFunction_ArrayRecursiveUnionExplicit = (): void => _test_functional_assertFunction(TypeGuardError)(
  "ArrayRecursiveUnionExplicit"
)(ArrayRecursiveUnionExplicit)(
  (p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit) => typia.functional.assertFunction(p),
)