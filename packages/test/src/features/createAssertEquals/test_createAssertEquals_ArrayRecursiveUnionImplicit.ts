import typia from "typia";

import { _test_assertEquals } from "../../internal/_test_assertEquals";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_createAssertEquals_ArrayRecursiveUnionImplicit =
  _test_assertEquals(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
    typia.createAssertEquals<ArrayRecursiveUnionImplicit>(),
  );
