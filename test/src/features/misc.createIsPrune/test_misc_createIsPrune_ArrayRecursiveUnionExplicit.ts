import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayRecursiveUnionExplicit } from "../../structures/ArrayRecursiveUnionExplicit";

export const test_misc_createIsPrune_ArrayRecursiveUnionExplicit = (): void =>
  _test_misc_isPrune(
    "ArrayRecursiveUnionExplicit",
  )<ArrayRecursiveUnionExplicit>(ArrayRecursiveUnionExplicit)(
    typia.misc.createIsPrune<ArrayRecursiveUnionExplicit>(),
  );
