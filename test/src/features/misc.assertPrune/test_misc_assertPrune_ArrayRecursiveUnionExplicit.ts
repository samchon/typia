import typia from "typia";
import { TypeGuardError } from "typia";

import { _test_misc_assertPrune } from "../../internal/_test_misc_assertPrune";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_assertPrune_ArrayRecursiveUnionExplicit =
  _test_misc_assertPrune(TypeGuardError)(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)((input) =>
    typia.misc.assertPrune<ArrayRecursiveUnionExplicit>(input),
  );
