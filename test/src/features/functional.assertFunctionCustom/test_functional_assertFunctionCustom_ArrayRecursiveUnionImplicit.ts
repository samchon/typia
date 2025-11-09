import typia from "typia";

import { _test_functional_assertFunction } from "../../internal/_test_functional_assertFunction";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertFunctionCustom_ArrayRecursiveUnionImplicit = (): void => _test_functional_assertFunction(CustomGuardError)(
  "ArrayRecursiveUnionImplicit"
)(ArrayRecursiveUnionImplicit)(
  (p: (input: ArrayRecursiveUnionImplicit) => ArrayRecursiveUnionImplicit) => typia.functional.assertFunction(p, (p) => new CustomGuardError(p)),
)