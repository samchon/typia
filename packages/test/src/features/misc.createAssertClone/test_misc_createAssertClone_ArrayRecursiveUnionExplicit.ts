import typia from "typia";

import { _test_misc_assertClone } from "../../internal/_test_misc_assertClone";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_createAssertClone_ArrayRecursiveUnionExplicit =
  _test_misc_assertClone(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
    typia.misc.createAssertClone<ArrayRecursiveUnionExplicit>(),
  );
