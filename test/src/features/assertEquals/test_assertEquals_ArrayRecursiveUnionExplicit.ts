import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { TypeGuardError } from "typia";

export const test_assertEquals_ArrayRecursiveUnionExplicit = _test_assertEquals(
  TypeGuardError,
)("ArrayRecursiveUnionExplicit")<ArrayRecursiveUnionExplicit>(
  ArrayRecursiveUnionExplicit,
)((input) => typia.assertEquals<ArrayRecursiveUnionExplicit>(input));
