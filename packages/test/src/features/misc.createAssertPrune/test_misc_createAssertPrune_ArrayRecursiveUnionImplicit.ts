import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_createAssertPrune_ArrayRecursiveUnionImplicit =
  _test_misc_assertPrune(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
    typia.misc.createAssertPrune<ArrayRecursiveUnionImplicit>(),
  );
