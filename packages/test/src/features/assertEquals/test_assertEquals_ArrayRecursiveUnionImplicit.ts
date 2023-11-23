import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_assertEquals_ArrayRecursiveUnionImplicit = _test_assertEquals(
  "ArrayRecursiveUnionImplicit",
)<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)((input) =>
  typia.assertEquals<ArrayRecursiveUnionImplicit>(input),
);
