import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_createAssertPrune_ArrayRecursiveUnionExplicit =
  _test_misc_assertPrune(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
    typia.misc.createAssertPrune<ArrayRecursiveUnionExplicit>(),
  );
