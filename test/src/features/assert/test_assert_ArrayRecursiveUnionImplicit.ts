import typia from "typia";

import { _test_assert } from "../../internal/_test_assert";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_assert_ArrayRecursiveUnionImplicit = _test_assert(
  "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
  typia.assert<ArrayRecursiveUnionImplicit>(input),
);
