import typia from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

import { TypeGuardError } from "typia";

export const test_misc_createAssertPrune_ArrayRecursiveUnionExplicit =
  _test_misc_assertPrune(TypeGuardError)(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
    typia.misc.createAssertPrune<ArrayRecursiveUnionExplicit>(),
  );
