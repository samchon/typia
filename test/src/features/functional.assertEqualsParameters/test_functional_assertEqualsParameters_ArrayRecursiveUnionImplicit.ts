import typia from "typia";

import { _test_functional_assertEqualsParameters } from "../../internal/_test_functional_assertEqualsParameters";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

import { TypeGuardError } from "typia";

export const test_functional_assertEqualsParameters_ArrayRecursiveUnionImplicit = (): void => _test_functional_assertEqualsParameters(TypeGuardError)(
  "ArrayRecursiveUnionImplicit"
)(ArrayRecursiveUnionImplicit)(
  (p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit) => typia.functional.assertEqualsParameters(p),
)