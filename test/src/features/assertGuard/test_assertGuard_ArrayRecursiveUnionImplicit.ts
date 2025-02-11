import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assertGuard } from "../../internal/_test_assertGuard";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_assertGuard_ArrayRecursiveUnionImplicit = _test_assertGuard(
  TypeGuardError,
)("ArrayRecursiveUnionImplicit")<ArrayRecursiveUnionImplicit>(
  ArrayRecursiveUnionImplicit,
)((input) => typia.assertGuard<ArrayRecursiveUnionImplicit>(input));
