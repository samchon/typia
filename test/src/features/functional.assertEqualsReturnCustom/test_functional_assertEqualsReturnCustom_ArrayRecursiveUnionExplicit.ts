import typia from "typia";

import { _test_functional_assertEqualsReturn } from "../../internal/_test_functional_assertEqualsReturn";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { CustomGuardError } from "../../internal/CustomGuardError";

export const test_functional_assertEqualsReturnCustom_ArrayRecursiveUnionExplicit = (): void => _test_functional_assertEqualsReturn(CustomGuardError)(
  "ArrayRecursiveUnionExplicit"
)(ArrayRecursiveUnionExplicit)(
  (p: (input: ArrayRecursiveUnionExplicit) => ArrayRecursiveUnionExplicit) => typia.functional.assertEqualsReturn(p, (p) => new CustomGuardError(p)),
)