import typia from "typia";

import { _test_misc_isPrune } from "../../internal/_test_misc_isPrune";
import { ArrayRecursiveUnionImplicit } from "../../structures/ArrayRecursiveUnionImplicit";

export const test_misc_createIsPrune_ArrayRecursiveUnionImplicit = (): void =>
  _test_misc_isPrune(
    "ArrayRecursiveUnionImplicit",
  )<ArrayRecursiveUnionImplicit>(ArrayRecursiveUnionImplicit)(
    typia.misc.createIsPrune<ArrayRecursiveUnionImplicit>(),
  );
