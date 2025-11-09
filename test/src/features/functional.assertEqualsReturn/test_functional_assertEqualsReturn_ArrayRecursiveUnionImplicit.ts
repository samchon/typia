import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsReturn_ArrayRecursiveUnionImplicit = (): void => _test_functional_assertEqualsReturn(TypeGuardError)(
  "ArrayRecursiveUnionImplicit"
)(ArrayRecursiveUnionImplicit)(
  (p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit) => typia.functional.assertEqualsReturn(p),
)