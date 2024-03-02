import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_assert_ArrayRecursiveUnionExplicit = _test_assert(
  TypeGuardError,
)("ArrayRecursiveUnionExplicit")<ArrayRecursiveUnionExplicit>(
  ArrayRecursiveUnionExplicit,
)((input) => typia.assert<ArrayRecursiveUnionExplicit>(input));
